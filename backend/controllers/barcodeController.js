import axios from "axios";

export const scanBarcode = async (req, res) => {
  const { barcode } = req.body;
  try {
    const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
    if (!response.data.product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const product = response.data.product;
    res.status(200).json({
      name: product.product_name,
      calories: product.nutriments["energy-kcal"],
      protein: product.nutriments.proteins,
      carbs: product.nutriments.carbohydrates,
      fat: product.nutriments.fat,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err.message });
  }
};
