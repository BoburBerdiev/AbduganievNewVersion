
const ProjectCardVideo = ({videoSrc, isHovered}) => {
    return (
            <iframe
                className={`!w-full !h-full rotate-video duration-500 !object-cover ${isHovered ? 'opacity-100 rotate-0' : 'opacity-0 rotate-0'}`}
                src={isHovered ? videoSrc : ''}
                allowFullScreen={true}
                loading="lazy"
            />
    );
};

export default ProjectCardVideo;