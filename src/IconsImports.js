import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import {
    faBriefcase,
    faUser,
    faHouse,
    faShapes,
} from "@fortawesome/free-solid-svg-icons";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";

export const icons = {
    react: {
        component: FontAwesomeIcon,
        icon: faReact,
    },
    vuejs: {
        component: FontAwesomeIcon,
        icon: faVuejs,
    },
    Briefcase: {
        component: FontAwesomeIcon,
        icon: faBriefcase,
    },
    User: {
        component: FontAwesomeIcon,
        icon: faUser,
    },
    House: {
        component: FontAwesomeIcon,
        icon: faHouse,
    },
    Shapes: {
        component: FontAwesomeIcon,
        icon: faShapes,
    },
};
