 const ServiceIcon = ({ id , gradientCenter , src }) => {
  return (
    <>

      <img src={src}  className="w-20 h-20 md:w-[6rem] md:h-[6rem] duration-200 transition-all"/>
        {/*{*/}
        {/*    0 === id ?*/}
        {/*        <svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >*/}
        {/*    <defs>*/}
        {/*    /!*<radialGradient*!/*/}
        {/*    /!*id='emeraldGradient'*!/*/}
        {/*    /!*gradientUnits='userSpaceOnUse'*!/*/}
        {/*    /!*cx={`${gradientCenter.cx}%`}*!/*/}
        {/*    /!*cy={`${gradientCenter.cy}%`}*!/*/}
        {/*    /!*>*!/*/}
        {/*    /!*<stop stopColor='#10b981'/>*!/*/}
        {/*    /!*<stop offset={90} stopColor='#404040'/>*!/*/}
        {/*    /!*</radialGradient>*!/*/}
        {/*    </defs>*/}
        {/*    <path*/}
        {/*    strokeLinecap="round"*/}
        {/*    strokeLinejoin="round"*/}
        {/*    className='fill-neutral-800/50'*/}
        {/*    stroke='url(#emeraldGradient)'*/}
        {/*    d="M7.05033 14.1213L4.929 16.2427L7.75743 19.0711L19.0711 7.75737L16.2427 4.92894L14.1214 7.05026L15.5356 8.46448L14.1214 9.87869L12.7072 8.46448L11.293 9.87869L12.7072 11.2929L11.293 12.7071L9.87875 11.2929L8.46454 12.7071L9.87875 14.1213L8.46454 15.5355L7.05033 14.1213ZM16.9498 2.80762L21.1925 7.05026C21.583 7.44079 21.583 8.07395 21.1925 8.46448L8.46454 21.1924C8.07401 21.5829 7.44085 21.5829 7.05033 21.1924L2.80768 16.9498C2.41716 16.5592 2.41716 15.9261 2.80768 15.5355L15.5356 2.80762C15.9261 2.4171 16.5593 2.4171 16.9498 2.80762ZM14.1214 18.3635L15.5356 16.9493L17.7781 19.1918H19.1923V17.7776L16.9498 15.5351L18.364 14.1208L20.9997 16.7565V20.9999H16.7578L14.1214 18.3635ZM5.63597 9.87806L2.80754 7.04963C2.41702 6.65911 2.41702 6.02594 2.80754 5.63542L5.63597 2.80699C6.02649 2.41647 6.65966 2.41647 7.05018 2.80699L9.87861 5.63542L8.4644 7.04963L6.34308 4.92831L4.92886 6.34253L7.05018 8.46385L5.63597 9.87806Z"*/}
        {/*    />*/}
        {/*    </svg>*/}
        {/*    :  1 === id  ?*/}
        {/*        <svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-20 h-20 md:w-[6rem] md:h-[6rem] duration-200 transition-all">*/}
        {/*            <defs>*/}
        {/*                <radialGradient*/}
        {/*                    id='emeraldGradient'*/}
        {/*                    gradientUnits='userSpaceOnUse'*/}
        {/*                    cx={`${gradientCenter.cx}%`}*/}
        {/*                    cy={`${gradientCenter.cy}%`}*/}
        {/*                >*/}
        {/*                    <stop stopColor='#10b981'/>*/}
        {/*                    <stop offset={90} stopColor='#404040'/>*/}
        {/*                </radialGradient>*/}
        {/*            </defs>*/}
        {/*            <path*/}
        {/*                strokeLinecap="round"*/}
        {/*                strokeLinejoin="round"*/}
        {/*                className='fill-neutral-900/50'*/}
        {/*                stroke='url(#emeraldGradient)'*/}
        {/*                d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"*/}
        {/*            />*/}
        {/*        </svg>*/}

        {/*    : 2 === id  ?*/}
        {/*                <svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-20 h-20 md:w-[6rem] md:h-[6rem] duration-200 transition-all">*/}
        {/*                    <defs>*/}
        {/*                        <radialGradient*/}
        {/*                            id='emeraldGradient'*/}
        {/*                            gradientUnits='userSpaceOnUse'*/}
        {/*                            cx={`${gradientCenter.cx}%`}*/}
        {/*                            cy={`${gradientCenter.cy}%`}*/}
        {/*                        >*/}
        {/*                            <stop stopColor='#10b981'/>*/}
        {/*                            <stop offset={90} stopColor='#404040'/>*/}
        {/*                        </radialGradient>*/}
        {/*                    </defs>*/}
        {/*                    <path*/}
        {/*                        strokeLinecap="round"*/}
        {/*                        strokeLinejoin="round"*/}
        {/*                        className='fill-neutral-900/50'*/}
        {/*                        stroke='url(#emeraldGradient)'*/}
        {/*                        d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"*/}
        {/*                    />*/}

        {/*                </svg>*/}



        {/*    : 3 === id  ?*/}
        {/*                    <svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-20 h-20 md:w-[6rem] md:h-[6rem] duration-200 transition-all">*/}
        {/*                        <defs>*/}
        {/*                            <radialGradient*/}
        {/*                                id='emeraldGradient'*/}
        {/*                                gradientUnits='userSpaceOnUse'*/}
        {/*                                cx={`${gradientCenter.cx}%`}*/}
        {/*                                cy={`${gradientCenter.cy}%`}*/}
        {/*                            >*/}
        {/*                                <stop stopColor='#10b981'/>*/}
        {/*                                <stop offset={90} stopColor='#404040'/>*/}
        {/*                            </radialGradient>*/}
        {/*                        </defs>*/}
        {/*                        <path*/}
        {/*                            strokeLinecap="round"*/}
        {/*                            strokeLinejoin="round"*/}
        {/*                            className='fill-neutral-900/50'*/}
        {/*                            stroke='url(#emeraldGradient)'*/}
        {/*                            d="M20 3C20.5523 3 21 3.44772 21 4V5.757L19 7.757V5H5V13.1L9 9.1005L13.328 13.429L11.9132 14.8422L9 11.9289L5 15.928V19H15.533L16.2414 19.0012L17.57 17.671L18.8995 19H19V16.242L21 14.242V20C21 20.5523 20.5523 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.44772 3.44772 3 4 3H20ZM21.7782 7.80761L23.1924 9.22183L15.4142 17L13.9979 16.9979L14 15.5858L21.7782 7.80761ZM15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7Z"*/}
        {/*                        />*/}
        {/*                    </svg>*/}
        {/*    : 4 === id  ?*/}
        {/*                        <svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-20 h-20 md:w-[6rem] md:h-[6rem] duration-200 transition-all">*/}
        {/*                            <defs>*/}
        {/*                                <radialGradient*/}
        {/*                                    id='emeraldGradient'*/}
        {/*                                    gradientUnits='userSpaceOnUse'*/}
        {/*                                    cx={`${gradientCenter.cx}%`}*/}
        {/*                                    cy={`${gradientCenter.cy}%`}*/}
        {/*                                >*/}
        {/*                                    <stop stopColor='#10b981'/>*/}
        {/*                                    <stop offset={90} stopColor='#404040'/>*/}
        {/*                                </radialGradient>*/}
        {/*                            </defs>*/}
        {/*                            <path*/}
        {/*                                strokeLinecap="round"*/}
        {/*                                strokeLinejoin="round"*/}
        {/*                                className='fill-neutral-900/50'*/}
        {/*                                stroke='url(#emeraldGradient)'*/}
        {/*                                d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"*/}
        {/*                            />*/}
        {/*                        </svg>*/}
        {/*    : 5 === id  ?*/}
        {/*                            <svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-20 h-20 md:w-[6rem] md:h-[6rem] duration-200 transition-all">*/}
        {/*                                <defs>*/}
        {/*                                    <radialGradient*/}
        {/*                                        id='emeraldGradient'*/}
        {/*                                        gradientUnits='userSpaceOnUse'*/}
        {/*                                        cx={`${gradientCenter.cx}%`}*/}
        {/*                                        cy={`${gradientCenter.cy}%`}*/}
        {/*                                    >*/}
        {/*                                        <stop stopColor='#10b981'/>*/}
        {/*                                        <stop offset={90} stopColor='#404040'/>*/}
        {/*                                    </radialGradient>*/}
        {/*                                </defs>*/}
        {/*                                <path*/}
        {/*                                    strokeLinecap="round"*/}
        {/*                                    strokeLinejoin="round"*/}
        {/*                                    className='fill-neutral-900/50'*/}
        {/*                                    stroke='url(#emeraldGradient)'*/}
        {/*                                    d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM12 7C13.1046 7 14 7.89543 14 9C14 9.73984 13.5983 10.3858 13.0011 10.7318L13 15H11L10.9999 10.7324C10.4022 10.3866 10 9.74025 10 9C10 7.89543 10.8954 7 12 7Z"></path>*/}

        {/*                            </svg>*/}
        {/*    : 6 === id  ?*/}
        {/*                                <svg id={id} xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 98 122.5"  viewBox="0 0 24 24" className="w-20 h-20 md:w-[6rem] md:h-[6rem] duration-200 transition-all">*/}
        {/*                                    <defs>*/}
        {/*                                        <radialGradient*/}
        {/*                                            id='emeraldGradient'*/}
        {/*                                            gradientUnits='userSpaceOnUse'*/}
        {/*                                            cx={`${gradientCenter.cx}%`}*/}
        {/*                                            cy={`${gradientCenter.cy}%`}*/}
        {/*                                        >*/}
        {/*                                            <stop stopColor='#10b981'/>*/}
        {/*                                            <stop offset={90} stopColor='#404040'/>*/}
        {/*                                        </radialGradient>*/}
        {/*                                    </defs>*/}
        {/*                                    <path*/}
        {/*                                        strokeLinecap="round"*/}
        {/*                                        strokeLinejoin="round"*/}
        {/*                                        className='fill-neutral-900/50'*/}
        {/*                                        stroke='url(#emeraldGradient)'*/}
        {/*                                        d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>*/}
        {/*                                </svg>*/}
        {/*    :  ''*/}
        {/*}*/}
    </>
  )
};
export default ServiceIcon;