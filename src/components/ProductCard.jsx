
export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="card product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="product-content">
        <h2>
          {product.title}
        </h2>

        <Button
          onClick={() => onAddToCart(product)}
        >
          Adicionar
        </Button>
      </div>
    </article>
  );
}
