import Image from 'next/image';
import notFoundImage from "@/assets/notFound.jpg"
const NotFound = () => {
    return (
        <div className='flex h-[80vh] flex-col text-4xl items-center justify-center w-full dark:text-white'>
            <p>404</p> 
            <p>Not Found</p>
        </div>
    );
};

export default NotFound;