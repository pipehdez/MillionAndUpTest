import React, { useEffect, useState } from "react";
import CryptoList from "../components/CryptoList";
import { useTickersQuery } from "../hooks/queries/useTickersQuery";
import Search from "../components/Search";
import FilterTab from "../components/FilterTab";
import { CryptoScreenProps } from "../interfaces/CryptoScreenProps";

const CryptoScreen: React.FC<CryptoScreenProps> = ({ navigation }) => {
  const [start, setStart] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterBy, setFilterBy] = useState<"volume24" | "market_cap_usd" | "price_usd">(
    "market_cap_usd"
  ); // Estado para almacenar la opción de filtro

  const { data, isLoading, isError, error, refetch } =
    useTickersQuery(start, limit);

  useEffect(() => {
    refetch();
  }, [start, limit]);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  const handleFilterChange = (filter: "volume24" | "market_cap_usd" | "price_usd") => {
    setFilterBy(filter);
  };

  const filteredData = data
    ? data
      .filter((crypto) =>
        crypto.name?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (filterBy === "volume24") {
          return parseFloat(b.volume24) - parseFloat(a.volume24);
        }
        else if (filterBy === "market_cap_usd") {
          return (
            parseFloat(b.market_cap_usd) - parseFloat(a.market_cap_usd)
          );
        } else if (filterBy === "price_usd") {
          return parseFloat(b.price_usd) - parseFloat(a.price_usd);
        }
        return 0;
      })
    : [];

    const filterTab = [
      {
        key: 'volume24',
        title: 'Hot',
        MyFunction: () => handleFilterChange("volume24"),
      },
      {
        key: 'market_cap_usd',
        title: 'Market Capitalization',
        MyFunction: () => handleFilterChange("market_cap_usd"),
      },
      {
        key: 'price_usd',
        title: 'Price USD',
        MyFunction: () => handleFilterChange("price_usd"),
      },
    ]

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterTab filterData={filterTab} filterBy={filterBy} />
      <CryptoList
        data={filteredData}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onEndReached={handleLoadMore}
        navigation={navigation}
      />
    </>
  );
};

export default CryptoScreen;
