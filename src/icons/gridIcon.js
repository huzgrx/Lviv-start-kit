import { Icon } from '@chakra-ui/react';

export default function GridIcon({ width = '20px', height = '20px', size, ...props }) {
    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.5 1.5V16.5M3.16667 1.5H14.8333C15.7538 1.5 16.5 2.24619 16.5 3.16667V14.8333C16.5 15.7538 15.7538 16.5 14.8333 16.5H3.16667C2.24619 16.5 1.5 15.7538 1.5 14.8333V3.16667C1.5 2.24619 2.24619 1.5 3.16667 1.5Z"
                    stroke="#165792"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </Icon>
    );
}
