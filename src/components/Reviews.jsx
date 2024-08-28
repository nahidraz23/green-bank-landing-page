import SingleReview from "./SingleReview";
import author1 from '../assets/images/avatar/avatar (1).png';
import author2 from '../assets/images/avatar/avatar (2).png';
import author3 from '../assets/images/avatar/avatar (3).png';

const Reviews = () => {
    const comments = [
        {
            id: 1,
            comment: '"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."',
            author: 'Hadid Khan',
            designation: 'UIUX Designer',
            avatar: author1
        },
        {
            id: 2,
            comment: "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
            author: 'Wade Warren',
            designation: 'Web Designer',
            avatar: author2
        },
        {
            id: 3,
            comment: '"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."',
            author: 'Jenny Wilson',
            designation: 'Trust Administrator',
            avatar: author3
        },
    ];

    return (
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 p-4">
            {
                comments.map(comment => (
                    <SingleReview comment={comment} key={comment.id} />
                ))
            }
        </div>
    );
};

export default Reviews;
