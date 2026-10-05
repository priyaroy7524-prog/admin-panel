"use client";

import { useState } from "react";
import {
  Search,
  Star,
  Check,
  X,
  MoreHorizontal,
  MessageSquare,
} from "lucide-react";

const reviewsData = [
  {
    id: 1,
    customer: "Rahul Sharma",
    email: "rahul@example.com",
    product: "Wireless Headphones",
    rating: 5,
    review:
      "Amazing product. Sound quality is really good and battery backup is excellent.",
    date: "Sep 28, 2026",
    status: "Published",
  },
  {
    id: 2,
    customer: "Priya Singh",
    email: "priya@example.com",
    product: "Smart Watch Pro",
    rating: 4,
    review:
      "Good watch with lots of useful features. Display quality is also nice.",
    date: "Sep 27, 2026",
    status: "Published",
  },
  {
    id: 3,
    customer: "Aman Verma",
    email: "aman@example.com",
    product: "Bluetooth Speaker",
    rating: 5,
    review:
      "The speaker is very loud and clear. Perfect for small parties.",
    date: "Sep 26, 2026",
    status: "Published",
  },
  {
    id: 4,
    customer: "Neha Gupta",
    email: "neha@example.com",
    product: "USB-C Hub",
    rating: 3,
    review:
      "Product works fine but I expected better build quality.",
    date: "Sep 25, 2026",
    status: "Pending",
  },
  {
    id: 5,
    customer: "Rohit Kumar",
    email: "rohit@example.com",
    product: "Gaming Mouse",
    rating: 5,
    review:
      "Very comfortable mouse. The clicks feel great and tracking is accurate.",
    date: "Sep 24, 2026",
    status: "Published",
  },
  {
    id: 6,
    customer: "Anjali Mehta",
    email: "anjali@example.com",
    product: "Laptop Stand",
    rating: 2,
    review:
      "The product arrived with scratches and the packaging was damaged.",
    date: "Sep 23, 2026",
    status: "Pending",
  },
  {
    id: 7,
    customer: "Vikas Yadav",
    email: "vikas@example.com",
    product: "Mechanical Keyboard",
    rating: 4,
    review:
      "Typing experience is very good. It took some time to get used to it.",
    date: "Sep 22, 2026",
    status: "Published",
  },
  {
    id: 8,
    customer: "Simran Kaur",
    email: "simran@example.com",
    product: "Wireless Earbuds",
    rating: 1,
    review:
      "Unfortunately the earbuds stopped working after a few days.",
    date: "Sep 21, 2026",
    status: "Rejected",
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(reviewsData);
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredReviews = reviews.filter((review) => {
    const searchMatch =
      review.customer.toLowerCase().includes(search.toLowerCase()) ||
      review.product.toLowerCase().includes(search.toLowerCase()) ||
      review.review.toLowerCase().includes(search.toLowerCase());

    const ratingMatch =
      ratingFilter === "All" ||
      review.rating === Number(ratingFilter);

    const statusMatch =
      statusFilter === "All" ||
      review.status === statusFilter;

    return searchMatch && ratingMatch && statusMatch;
  });

  const updateStatus = (id, status) => {
    setReviews((currentReviews) =>
      currentReviews.map((review) =>
        review.id === id
          ? { ...review, status }
          : review
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Reviews
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage customer reviews and ratings
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
          <MessageSquare size={17} />
          Review Settings
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <ReviewStat
          title="Average Rating"
          value="4.6"
          subtitle="out of 5"
          icon={<Star size={20} />}
        />

        <ReviewStat
          title="Total Reviews"
          value="2,846"
          subtitle="All reviews"
          icon={<MessageSquare size={20} />}
        />

        <ReviewStat
          title="Positive Reviews"
          value="2,412"
          subtitle="4 & 5 star reviews"
          icon={<Check size={20} />}
        />

        <ReviewStat
          title="Pending Reviews"
          value="126"
          subtitle="Needs attention"
          icon={<MoreHorizontal size={20} />}
        />
      </div>

      {/* Rating Overview */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
          {/* Average */}
          <div className="flex flex-col items-center justify-center border-b border-gray-100 pb-6 lg:border-b-0 lg:border-r lg:pb-0">
            <h2 className="text-5xl font-bold text-gray-900">
              4.6
            </h2>

            <div className="mt-3 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={19}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Based on 2,846 reviews
            </p>
          </div>

          {/* Rating Bars */}
          <div className="space-y-3">
            <RatingBar stars="5" percentage="72%" count="2,049" />
            <RatingBar stars="4" percentage="18%" count="512" />
            <RatingBar stars="3" percentage="6%" count="171" />
            <RatingBar stars="2" percentage="3%" count="85" />
            <RatingBar stars="1" percentage="1%" count="29" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search customer, product or review..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          {/* Rating */}
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-400"
          >
            <option value="All">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>

          {/* Status */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-400"
          >
            <option value="All">All Status</option>
            <option value="Published">Published</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Reviews */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Rating
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Review
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Date
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredReviews.map((review) => (
                <tr
                  key={review.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                >
                  {/* Customer */}
                  <td className="px-6 py-5">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {review.customer}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {review.email}
                      </p>
                    </div>
                  </td>

                  {/* Product */}
                  <td className="px-6 py-5">
                    <p className="text-sm font-medium text-gray-700">
                      {review.product}
                    </p>
                  </td>

                  {/* Rating */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          className={
                            star <= review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>

                    <p className="mt-1 text-xs text-gray-500">
                      {review.rating}.0
                    </p>
                  </td>

                  {/* Review */}
                  <td className="max-w-[300px] px-6 py-5">
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {review.review}
                    </p>
                  </td>

                  {/* Date */}
                  <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-500">
                    {review.date}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <StatusBadge status={review.status} />
                  </td>

                  {/* Action */}
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      {review.status === "Pending" && (
                        <>
                          <button
                            onClick={() =>
                              updateStatus(review.id, "Published")
                            }
                            title="Approve"
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600 transition hover:bg-green-100"
                          >
                            <Check size={16} />
                          </button>

                          <button
                            onClick={() =>
                              updateStatus(review.id, "Rejected")
                            }
                            title="Reject"
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600 transition hover:bg-red-100"
                          >
                            <X size={16} />
                          </button>
                        </>
                      )}

                      {review.status !== "Pending" && (
                        <button
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                          title="More"
                        >
                          <MoreHorizontal size={17} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredReviews.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-12 text-center"
                  >
                    <p className="text-sm font-medium text-gray-900">
                      No reviews found
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Try changing your search or filters.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-900">
              {filteredReviews.length}
            </span>{" "}
            reviews
          </p>

          <div className="flex items-center gap-1">
            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-50">
              Previous
            </button>

            <button className="rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white">
              1
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
              2
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
              3
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewStat({ title, value, subtitle, icon }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-gray-900">
            {value}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
          {icon}
        </div>
      </div>
    </div>
  );
}

function RatingBar({ stars, percentage, count }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex w-[55px] items-center gap-1">
        <span className="text-sm font-medium text-gray-700">
          {stars}
        </span>

        <Star
          size={14}
          className="fill-yellow-400 text-yellow-400"
        />
      </div>

      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gray-900"
          style={{ width: percentage }}
        />
      </div>

      <span className="w-[55px] text-right text-xs text-gray-500">
        {count}
      </span>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Published: "bg-green-50 text-green-700",
    Pending: "bg-yellow-50 text-yellow-700",
    Rejected: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
}