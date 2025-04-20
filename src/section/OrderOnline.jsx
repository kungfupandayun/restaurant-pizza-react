import Button from "../components/Button";
import { FaMotorcycle, FaShoppingBag } from "react-icons/fa";

const OrderOnline = () => {
    return (
        <section
            id="orderonline"
            className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12" style={{ fontFamily: 'Cursive' }}>
                    How would you like your order?
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <div className="group transform hover:scale-105 transition-transform duration-300">
                        <Button
                            text={
                                <div className="flex flex-col items-center space-y-4">
                                    <FaMotorcycle className="text-6xl text-red-500 group-hover:text-red-400 transition-colors" />
                                    <span className="text-2xl font-bold">Delivery</span>
                                    <span className="text-gray-300 text-sm">Fast delivery to your door</span>
                                </div>
                            }
                            className="w-64 h-64 rounded-xl border-2 border-red-500 bg-gray-800 hover:bg-gray-700 transition-colors p-6 flex flex-col items-center justify-center"
                        />
                    </div>
                    <div className="group transform hover:scale-105 transition-transform duration-300">
                        <Button
                            text={
                                <div className="flex flex-col items-center space-y-4">
                                    <FaShoppingBag className="text-6xl text-red-500 group-hover:text-red-400 transition-colors" />
                                    <span className="text-2xl font-bold">Take Away</span>
                                    <span className="text-gray-300 text-sm">Pick up your order</span>
                                </div>
                            }
                            className="w-64 h-64 rounded-xl border-2 border-red-500 bg-gray-800 hover:bg-gray-700 transition-colors p-6 flex flex-col items-center justify-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderOnline;
