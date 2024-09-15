import {
  StyleSheet,
  View,
  Button,
  Image,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Text,
} from 'react-native';
import data from '@/assets/data.json';
import Ionicons from '@expo/vector-icons/Ionicons';
import useCartStore from '@/store/cartStore';

export default function HomeScreen() {
  const { reduceProduct, addProduct } = useCartStore();

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Image style={styles.cartItemImage} source={{ uri: item.image }} />
      <View style={styles.itemContainer}>
        <Text style={styles.cartItemName}>{item.title}</Text>
        <Text>${item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => reduceProduct(item)}>
          <Ionicons name="remove" size={20} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addProduct(item)}>
          <Ionicons name="add" size={20} color={'#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartItemContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  cartItemImage: {
    width: 50,
    height: 50,
    objectFit: 'contain',
  },
  itemContainer: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
