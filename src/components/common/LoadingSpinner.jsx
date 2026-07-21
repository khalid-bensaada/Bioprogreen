function LoadingSpinner() {
    return (
        <div className="flex min-h-[200px] items-center justify-center">

            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#5A7D2B]"></div>

        </div>
    );
}

export default LoadingSpinner;