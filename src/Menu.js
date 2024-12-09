import React, { useState } from "react";
import {
  Snowflake,
  CandyCane,
  Coffee,
  Wine,
  UtensilsCrossed,
  Beer,
} from "lucide-react";

const ChristmasBarMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("cocktails");

  const menuItems = {
    cocktails: [
      // Holiday Specials
      {
        name: "Boozy Hot Chocolate",
        description: "Dark chocolate, choice of spirit, whipped cream",
        isSpecial: true,
      },
      {
        name: "Brandy Alexander",
        description: "Brandy, crème de cacao, cream, freshly grated nutmeg",
        isSpecial: true,
      },
      {
        name: "Irish Coffee",
        description: "Whiskey, coffee, brown sugar, whipped cream",
        isSpecial: true,
      },
      {
        name: "Chocolate Martini",
        description: "Vodka, crème de cacao, chocolate liqueur",
        isSpecial: true,
      },
      // Whiskey
      {
        name: "Highball",
        description: "Classic whiskey highball with fevertree soda water",
      },
      {
        name: "Manhattan",
        description: "Rye whiskey, sweet vermouth, bitters",
      },
      // Vodka
      {
        name: "Vodka Martini",
        description: "Classic vodka martini, dry vermouth",
      },
      {
        name: "Espresso Martini",
        description: "Vodka, Kahlúa, fresh espresso",
      },
      {
        name: "White Russian",
        description: "Vodka, Kahlúa, heavy cream",
      },
      {
        name: "Vodka Tonic",
        description: "Vodka, tonic water, lime",
      },
      {
        name: "Lemon Drop",
        description: "Vodka, triple sec, fresh lemon juice",
      },
      {
        name: "Cosmopolitan",
        description: "Vodka, cranberry juice, lime juice, triple sec",
      },
      {
        name: "Vodka Sour",
        description: "Vodka, lemon juice, simple syrup, egg white",
      },
    ],
    alcohols: [
      {
        name: "Spiced Eggnog",
        description: "Traditional eggnog with holiday spices and rum",
        isSpecial: true,
      },
      {
        name: "Sierra Nevada Celebration 12oz - 6.8%",
        description:
          "Freshly picked hops, rushed from farm to brewery, fill Celebration IPA with powerful citrus and pine flavors",
        isSpecial: true,
      },
      {
        name: "St. Bernardus Christmas Ale 12oz - 9.8%",
        description:
          "An intensely dark beer with a full, yet slightly fruity flavour",
        isSpecial: true,
      },
      {
        name: "Pabst Blue Ribbon 24oz - 4.7%",
        description: "Classic American lager",
      },
    ],
    hotDrinks: [
      {
        name: "Hot Cocoa",
        description: "Rich hot chocolate, topped with whipped cream",
        isSpecial: true,
      },
      {
        name: "Cardamom Mango Lassi",
        description: "Indian yogurt-based beverage",
        isSpecial: true,
      },
    ],
    snacks: [
      {
        name: "Popcorn",
        description: "Lesser Evil",
      },
      {
        name: "Nuts",
        description: "Mixed nuts with rosemary and maple",
      },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 p-6">
        <div className="flex justify-center items-center gap-4 text-white">
          <Snowflake className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Holiday Menu</h1>
          <Snowflake className="w-8 h-8" />
        </div>
        <p className="text-center text-white mt-2 italic">VA Sports Betting</p>
      </div>

      {/* Category Buttons */}
      <div className="p-6">
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setSelectedCategory("cocktails")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors
              ${
                selectedCategory === "cocktails"
                  ? "bg-red-600 text-white border-red-600"
                  : "border-red-600 text-red-600 hover:bg-red-50"
              }`}
          >
            <Wine className="w-4 h-4" />
            Cocktails
          </button>
          <button
            onClick={() => setSelectedCategory("alcohols")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors
              ${
                selectedCategory === "alcohols"
                  ? "bg-red-600 text-white border-red-600"
                  : "border-red-600 text-red-600 hover:bg-red-50"
              }`}
          >
            <Beer className="w-4 h-4" />
            Beverages
          </button>
          <button
            onClick={() => setSelectedCategory("hotDrinks")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors
              ${
                selectedCategory === "hotDrinks"
                  ? "bg-red-600 text-white border-red-600"
                  : "border-red-600 text-red-600 hover:bg-red-50"
              }`}
          >
            <Coffee className="w-4 h-4" />
            Non-Alcoholic
          </button>
          <button
            onClick={() => setSelectedCategory("snacks")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors
              ${
                selectedCategory === "snacks"
                  ? "bg-red-600 text-white border-red-600"
                  : "border-red-600 text-red-600 hover:bg-red-50"
              }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            Snacks
          </button>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {menuItems[selectedCategory].map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                item.isSpecial
                  ? "bg-red-50 border-red-200"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">
                  {item.name}
                  {"  "}
                  {item.isSpecial && (
                    <CandyCane className="w-4 h-4 text-red-500" />
                  )}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200 text-center">
          <p className="text-red-600 font-semibold flex items-center justify-center gap-2">
            <Snowflake className="w-5 h-5" />
            Happy Holidays! 🎄
            <Snowflake className="w-5 h-5" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChristmasBarMenu;
