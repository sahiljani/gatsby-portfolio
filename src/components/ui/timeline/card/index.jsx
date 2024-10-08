import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import SkillShare, { SkillItem } from "@ui/skill-share";
const TimelineCard = ({ title, subtitle, rating, desc, layout, className, skills }) => {
    return (
        <div className={cn("resume-single-list", className)}>
            <div
                className={cn(
                    "inner",
                    layout === 2 && "psudo-after-none psudo-after-none"
                )}
            >
                <div>
                <div className="heading" style={{ flexDirection: 'column' }}>

                    <div className="title">
                        <h4>{title}</h4>
                        <span>{subtitle}</span>
                    </div>
                   
                    {/* {rating && (
                        <div className="date-of-time">
                            <span>{rating}</span>
                        </div>
                    )} */}
                </div>
                
                </div>

   
                <p className="description">{desc}</p>
                
            </div>
        </div>
    );
};

TimelineCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    rating: PropTypes.string,
    desc: PropTypes.string.isRequired,
    className: PropTypes.string,
    layout: PropTypes.oneOf([1, 2]),
    
};

TimelineCard.defaultProps = {
    layout: 1,
};

export default TimelineCard;
