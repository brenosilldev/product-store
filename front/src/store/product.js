import { create } from "zustand";

export const useProductStore = create((set) => ({
    products : [],
    setProcuts : (products) => set({products}),
    createProduct : async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success:false, message: "Missing required fields"};
        }

        const res = await fetch('/v1/products/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });

        const data = await res.json();

        set((state) => ({products: [...state.products, data.products]}));

        return {success:true, message:data.message};
    },
    fetchProducts : async () => {
        const res = await fetch('/v1/products/get');
        const data = await res.json();
        set({products: data.products});
    },
    deteleProduct : async (id) => {
        const res = await fetch(`/v1/products/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
       
        if(!data.success) return  { success:false,message: data.message}

        set((state) => ({products: state.products.filter(product => product._id !== id)}));
        return {success:true, message:data.message};
    },
    updateProduct : async (id,newProduct) => {
        const res = await fetch(`/v1/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();

           
        if(!data.success) return  { success:false,message: data.message}
        set((state) => ({products: state.products.map((product) => product._id === id ? data.products : product)}));
        return {success:true, message:data.message};
    }
}));