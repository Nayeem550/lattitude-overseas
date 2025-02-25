import Metadata from '../Components/Metadata';

export default function Page({ children }) {
    return (
        <div className='relative bg-[url("/bg2.svg")] overflow-hidden'>
            <Metadata />
            <div className="absolute inset-0 bg-common-white bg-opacity-90 z-10"></div>
            <div className="relative z-20">{children}</div>
        </div>
    );
}
