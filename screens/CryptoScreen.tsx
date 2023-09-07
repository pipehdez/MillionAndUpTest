import React, { useEffect } from "react";
import { TextInput, View } from "react-native";
import CryptoList from "../components/CryptoList";
import { useTickersQuery } from "../hooks/queries/useTickersQuery";
import { useNavigation } from "@react-navigation/native";
import Search from "../components/Search";

interface CryptoScreenProps {
  navigation: any;
}

const CryptoScreen: React.FC<CryptoScreenProps> = ({ navigation }) => {
  //const navigation = useNavigation();

  const [start, setStart] = React.useState<number>(0);
  const [limit, setLimit] = React.useState<number>(10);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const { data, isLoading, isError, error, refetch, isRefetching } =
    useTickersQuery(start, limit);

  useEffect(() => {
    refetch();
  }, [start, limit]);

  // carga infinita con Flatlist onEndReached y refresca la lista con refetch de useTickersQuery
  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };
  // Filtrar la lista de criptomonedas basándonos en el término de búsqueda
  const filteredData = data?.filter((crypto) =>
    crypto.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CryptoList
        data={filteredData}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onEndReached={handleLoadMore}
        navigation={navigation}
        isRefetching={isRefetching}
      />
    </View>
  );
};

export default CryptoScreen;
