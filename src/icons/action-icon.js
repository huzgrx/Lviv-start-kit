import { Icon } from '@chakra-ui/react';

export default function ActionIcon({ width = '20px', height = '20px', size, ...props }) {
    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.0002 10.8333C10.4604 10.8333 10.8335 10.4602 10.8335 9.99999C10.8335 9.53975 10.4604 9.16666 10.0002 9.16666C9.53993 9.16666 9.16683 9.53975 9.16683 9.99999C9.16683 10.4602 9.53993 10.8333 10.0002 10.8333Z"
                    stroke="#344054"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M15.8335 10.8333C16.2937 10.8333 16.6668 10.4602 16.6668 9.99999C16.6668 9.53975 16.2937 9.16666 15.8335 9.16666C15.3733 9.16666 15.0002 9.53975 15.0002 9.99999C15.0002 10.4602 15.3733 10.8333 15.8335 10.8333Z"
                    stroke="#344054"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4.16683 10.8333C4.62707 10.8333 5.00016 10.4602 5.00016 9.99999C5.00016 9.53975 4.62707 9.16666 4.16683 9.16666C3.70659 9.16666 3.3335 9.53975 3.3335 9.99999C3.3335 10.4602 3.70659 10.8333 4.16683 10.8333Z"
                    stroke="#344054"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </Icon>
    );
}
