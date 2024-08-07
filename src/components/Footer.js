export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="px-2 py-2">
                <div className="flex items-center justify-center text-center px-7 py-7 bg-gray-100 rounded-lg">
                    <p className="w-full">
                        © 2022 - {currentYear} . All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    );
}