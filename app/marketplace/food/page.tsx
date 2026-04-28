import Icon from "@/app/components/shared/Icon";
import Link from "next/link";
import { foodItems, foodCategories } from "@/lib/mock/food";

export const metadata = {
  title: "Food Marketplace",
  description: "Discover homemade campus bites, baked goods, and cultural dishes from verified student chefs on ADEL.",
};

export default function FoodMarketplacePage() {
  const featured = foodItems.find((f) => f.featured);

  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">
            Campus Kitchen
          </h1>
          <p className="font-body text-on-surface-variant text-base max-w-lg">
            Homemade meals, baked goods, and cultural delicacies — all from verified student chefs.
          </p>
        </div>
        <Link
          href="/onboarding/chef"
          className="shrink-0 inline-flex items-center gap-2 py-3 px-6 rounded-full bg-linear-to-r from-tertiary to-tertiary-dim text-white font-headline font-semibold hover:brightness-110 active:scale-[0.98] transition-all"
          style={{ boxShadow: "0 4px 14px rgba(129,81,0,0.2)" }}
        >
          <Icon name="restaurant" size={20} />
          Become a Chef
        </Link>
      </section>

      {/* Categories */}
      <section className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {foodCategories.map((cat) => (
          <button
            key={cat.label}
            className={`whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
              cat.active
                ? "bg-tertiary text-on-tertiary"
                : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low"
            }`}
          >
            <Icon name={cat.icon} size={18} />
            {cat.label}
          </button>
        ))}
      </section>

      {/* Featured Card */}
      {featured && (
        <section>
          <Link
            href={`/marketplace/items/${featured.id}`}
            className="group block bg-surface-container-lowest rounded-2xl overflow-hidden relative"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 h-56 md:h-auto relative bg-surface-container">
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-tertiary-container text-on-tertiary-container text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Icon name="local_fire_department" filled size={14} />
                    Featured Today
                  </span>
                </div>
                <div className="w-full h-full bg-linear-to-br from-tertiary/20 to-tertiary-container/20 flex items-center justify-center text-tertiary">
                  <Icon name="restaurant" size={64} className="opacity-30" />
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-3">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-tertiary-container/20 text-on-tertiary-container text-xs font-medium px-2 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-2 group-hover:text-tertiary transition-colors">
                  {featured.title}
                </h2>
                <p className="font-body text-on-surface-variant text-sm mb-4 max-w-md">
                  {featured.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-tertiary-container/30 flex items-center justify-center text-tertiary">
                      <Icon name="person" filled size={20} />
                    </div>
                    <div>
                      <p className="font-headline text-sm font-bold text-on-surface">
                        {featured.seller.name}
                      </p>
                      <p className="font-body text-xs text-on-surface-variant flex items-center gap-1">
                        <Icon name="star" filled size={12} className="text-tertiary" />
                        {featured.seller.rating} ({featured.seller.reviews} reviews)
                      </p>
                    </div>
                  </div>
                  <span className="font-headline text-xl font-bold text-tertiary">
                    {featured.price.toLocaleString()} {featured.currency}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Food Grid */}
      <section>
        <h2 className="font-headline text-xl font-bold text-on-surface mb-6">
          Today&apos;s Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems.map((food) => (
            <Link
              key={food.id}
              href={`/marketplace/items/${food.id}`}
              className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:translate-y-[-2px] transition-all duration-300"
            >
              <div className="h-44 relative bg-surface-container overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-tertiary/10 to-tertiary-container/10 flex items-center justify-center text-tertiary">
                  <Icon name="restaurant" size={48} className="opacity-20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-surface/80 backdrop-blur-sm text-tertiary text-xs font-bold px-2 py-1 rounded-full">
                    {food.availability}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {food.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-tertiary-container/20 text-on-tertiary-container text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-headline text-base font-bold text-on-surface mb-1 group-hover:text-tertiary transition-colors">
                  {food.title}
                </h3>
                <p className="font-body text-xs text-on-surface-variant line-clamp-2 mb-3">
                  {food.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-body text-xs text-on-surface-variant">
                    by {food.seller.name}
                  </p>
                  <span className="font-headline font-bold text-tertiary">
                    {food.price.toLocaleString()} {food.currency}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
