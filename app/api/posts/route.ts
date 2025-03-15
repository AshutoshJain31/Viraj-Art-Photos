
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cities = ["Kalyan", "Dombivali", "Ulhasnagar", "Thane"];
  const events = [
    "weeding",
    "Birthday",
    "Munja",
    "Engagements",
    "Anniversaries",
    "Family-Gatherings",
    "Maternity-and-Newborn",
  ];

  try {
    const combinations = cities.map((city) =>
      events.map((event) => ({ city, event }))
    ).flat();
    
    // Ensure body is an array and extract 'slug' values properly
    const slugs = combinations.map((item: { city: string; event: string }) => ({
      slug: `${item.city.toLowerCase()}-${item.event.toLowerCase()}`
    }));

    return NextResponse.json(slugs);
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
