import quote from '../assets/images/quote.svg';

const SingleReview = ({ comment }) => {
    return (
        <div className='h-80 max-w-full sm:max-w-[392px] bg-[#27322f8f] px-4 sm:px-8 py-6 rounded-2xl'>
            <img src={quote} className='w-6 sm:w-8 pt-2 sm:pt-4 pb-1 sm:pb-2' alt="quote icon" />
            <p className="text-primary my-4 sm:my-8 text-sm sm:text-base">
                {comment?.comment}
            </p>

            <div className="author flex items-center gap-3">
                <img src={comment?.avatar} alt="user avatar" className='w-10 h-10 sm:w-12 sm:h-12 rounded-full' />

                <div className="author-info ">
                    <p className='text-primary text-sm sm:text-base'>{comment?.author}</p>
                    <p className='text-secondary text-xs sm:text-sm'>{comment?.designation}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
