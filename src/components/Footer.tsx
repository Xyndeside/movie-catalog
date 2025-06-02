export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; 2025 MySite. Все права защищены.</p>

                <div className="space-x-4 mt-4 md:mt-0">
                    <a
                        href="#"
                        className="text-white hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                        Политика конфиденциальности
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                        Условия использования
                    </a>
                </div>
            </div>
        </footer>
    );
}