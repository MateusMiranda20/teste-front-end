

export interface ApiProduct {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number; 
}

interface ApiResponse {
  success: boolean;
  products: ApiProduct[];
}



const API = "/test.json"

export async function fetchProducts(): Promise<ApiProduct[]> {
  try {
    const res = await fetch(API);
    if (!res.ok) {
      throw new Error(`Erro HTTP: ${res.status}`);
    }
    const data: ApiResponse = await res.json();
    
    if (!data.success) {
      throw new Error("A API retornou um erro: success é false");
    }
    
    return data.products;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error; 
  }
}