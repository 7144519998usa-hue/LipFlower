import Link from "next/link";
import AmazonStoreProductCard from "../components/AmazonStoreProductCard";
import JsonLd from "../components/JsonLd";
import { buildBeautyMetadata } from "../lib/beautyMetadata";
import {
  amazonStorefrontCategories,
  getAmazonStorefrontProducts,
} from "../lib/amazonStorefrontProducts";
import { beautySiteUrl } from "../lib/beautyData";

export const metadata = buildBeautyMetadata({
  title: "Shop Beauty on Amazon",
  description:
    "Shop LipFlower's clean Amazon beauty storefront for makeup, skin care, hair care, fragrance, body care, tools, nails, and artificial jewelry.",
  canonicalPath: "/shop",
});

export default function ShopPage() {
  const products = getAmazonStorefrontProducts();
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "LipFlower Amazon Beauty Shop",
    description: "A clean Amazon shopping page for high-intent beauty product searches.",
    url: `${beautySiteUrl}/shop`,
    numberOfItems: products.length,
    itemListElement: products.slice(0, 120).map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.title,
      url: `${beautySiteUrl}/shop#${product.id}`,
    })),
  };

  return (
    <main className="shop-shell">
      <JsonLd data={itemListSchema} />
      <section className="shop-hero">
        <div>
          <span className="eyebrow">Amazon beauty shop</span>
          <h1>Shop beauty faster, without the clutter.</h1>
          <p>
            A clean product-only storefront for makeup, skin care, hair care, fragrance, body
            care, beauty tools, nails, and artificial jewelry.
          </p>
          <div className="shop-hero-pills" aria-label="Shop highlights">
            <span>High-intent searches</span>
            <span>Amazon affiliate links</span>
            <span>No article clutter</span>
          </div>
        </div>
        <aside className="shop-hero-card" aria-label="Shop summary">
          <strong>{products.length} shopping cards</strong>
          <span>Amazon links use LipFlower affiliate tracking.</span>
          <span>Check final price, seller, size, shade, and availability on Amazon.</span>
        </aside>
      </section>

      <section className="shop-conversion-band" aria-label="Shop by popular intent">
        <div>
          <strong>Popular right now</strong>
          <span>lipstick under $50</span>
        </div>
        <div>
          <strong>High buyer intent</strong>
          <span>sulfate-free shampoo</span>
        </div>
        <div>
          <strong>Easy Amazon clicks</strong>
          <span>pressed powder, lip stain, brown mascara</span>
        </div>
      </section>

      <nav className="shop-category-strip" aria-label="Shop categories">
        {amazonStorefrontCategories.map((category) => (
          <Link key={category.slug} href={`#${category.slug}`}>
            <strong>{category.label}</strong>
            <span>{category.count} cards</span>
          </Link>
        ))}
      </nav>

      <p className="shop-disclosure">
        As an Amazon Associate, LipFlower may earn from qualifying purchases.
      </p>

      {amazonStorefrontCategories.map((category) => {
        const categoryProducts = products.filter((product) => product.categorySlug === category.slug);

        return (
          <section key={category.slug} id={category.slug} className="shop-category-section">
            <div className="shop-section-heading">
              <div>
                <span className="eyebrow">{category.label}</span>
                <h2>{category.label} products</h2>
                <p>{category.description}</p>
              </div>
              <span className="shop-section-count">{category.count} cards</span>
            </div>
            <div className="amazon-store-grid">
              {categoryProducts.map((product) => (
                <AmazonStoreProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
