interface ProductInterface {

    getName(): string;

    getCost(): number;

    updateTotalCost(totalCost: number): number;
}

export default ProductInterface;