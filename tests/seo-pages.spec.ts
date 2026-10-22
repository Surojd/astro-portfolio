import { expect, test } from '@playwright/test';

const serviceRoutes = [
	'/services/spring-boot-development/',
	'/services/java-development/',
	'/services/saas-development/',
	'/services/wordpress-development/',
	'/services/plugin-development/',
	'/services/payment-gateway-integration/',
	'/services/aws-consulting/',
	'/services/vps-management/',
];

const technologyRoutes = [
	'/technologies/spring-boot/',
	'/technologies/java/',
	'/technologies/react/',
	'/technologies/flutter/',
	'/technologies/aws/',
];

const visibleSiteLinks = [
	...serviceRoutes,
	...technologyRoutes,
	'/case-studies/',
	'/blog/',
];

test.describe('SEO landing pages', () => {
	for (const route of [...visibleSiteLinks]) {
		test(`${route} renders canonical metadata and structured data`, async ({ page }) => {
			const response = await page.goto(route);
			expect(response?.status()).toBe(200);
			await expect(page.locator('main h1')).toBeVisible();
			await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
			await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
				'href',
				`https://surojd.com${route}`
			);
			await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);

			const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
			expect(schemas.length).toBeGreaterThan(0);
			for (const schema of schemas) {
				expect(() => JSON.parse(schema)).not.toThrow();
			}

			const siteNavigation = page
				.getByTestId('footer')
				.getByRole('navigation', { name: 'Services, technologies, and resources' });
			await expect(siteNavigation.locator(`a[href="${route}"]`)).toBeVisible();
		});
	}
});

test('generated sitemap contains all requested landing pages', async ({ request }) => {
	const response = await request.get('http://127.0.0.1:3000/sitemap-0.xml');
	expect(response.ok()).toBeTruthy();
	const sitemap = await response.text();

	for (const route of [...serviceRoutes, ...technologyRoutes, '/case-studies/', '/blog/']) {
		expect(sitemap).toContain(`https://surojd.com${route}`);
	}
});
