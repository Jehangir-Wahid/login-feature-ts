import * as React from "react";

interface IProps {
  width: number;
  height: number;
  color?: string;
}

const Logo: React.FC<IProps> = ({ width, height, color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=""
      width={width}
      height={height}
      fill={color}
    >
      <g>
        <path d="M9.169 24.829a9.44 9.44 0 01-6.513-2.365 9.459 9.459 0 01-1.292-11.466A8.906 8.906 0 014.948 7.93a10.979 10.979 0 014.8-1.063 8.684 8.684 0 012.965.48 8.068 8.068 0 012.347 1.3l-2.911 3.771a3.351 3.351 0 00-2.037-.823 3.4 3.4 0 00-2.729 1.148 4.615 4.615 0 00-.982 3.1 4.5 4.5 0 001.019 3.1 3.186 3.186 0 002.474 1.149 3.917 3.917 0 001.51-.309 6.684 6.684 0 001.4-.788l2.4 3.839a7.906 7.906 0 01-3 1.56 11.909 11.909 0 01-3.035.435zM21.893 24.269a5.176 5.176 0 01-4-1.577 5.279 5.279 0 01-1.455-3.7 4.769 4.769 0 012.329-4.2q2.328-1.525 7.568-2.04-.218-1.782-2.547-1.782a10.91 10.91 0 00-4.585 1.439L17.021 8.57a17.508 17.508 0 013.893-1.68 14.633 14.633 0 014.111-.583 7.756 7.756 0 015.567 1.9q2 1.9 2 6.119v9.529h-5.094l-.436-1.645h-.145a10.073 10.073 0 01-2.329 1.491 6.4 6.4 0 01-2.695.568zm2.183-4.525a2.228 2.228 0 001.255-.325 6.443 6.443 0 001-.84v-2.331a7.222 7.222 0 00-3.092.926 1.7 1.7 0 00-.837 1.337q0 1.23 1.673 1.23zM41.208 24.269a11.654 11.654 0 01-3.693-.651 11.307 11.307 0 01-3.365-1.748l2.765-3.634a8.072 8.072 0 004.439 1.714q1.818 0 1.819-1.028 0-.686-1.055-1.08l-2.437-.908a11.08 11.08 0 01-3.093-1.766 3.98 3.98 0 01-1.492-3.308 4.809 4.809 0 012-4.045 8.416 8.416 0 015.2-1.508 9.7 9.7 0 013.875.7 15.451 15.451 0 012.82 1.56l-2.765 3.5a6.883 6.883 0 00-3.711-1.44q-1.6 0-1.6.96 0 .686 1.019 1.028t2.4.823a11.153 11.153 0 013.147 1.679 4.047 4.047 0 011.51 3.462 5.065 5.065 0 01-1.983 4.045 8.892 8.892 0 01-5.8 1.645zM78.763 8.738q-1.946-2.434-5.983-2.435a8.58 8.58 0 00-3.623.8l-5.092 8.919a8.087 8.087 0 002.669 5.881 9.778 9.778 0 006.694 2.367 12.379 12.379 0 003.347-.513 11.655 11.655 0 003.275-1.473l-2.037-3.5a8.028 8.028 0 01-3.711 1.027 5.576 5.576 0 01-2.656-.6 3.283 3.283 0 01-1.564-2.143h10.369q.073-.308.164-1.011a11.628 11.628 0 00.092-1.457 9.1 9.1 0 00-1.944-5.862zm-8.752 4.488a2.843 2.843 0 012.911-2.467 2.221 2.221 0 011.947.755 2.916 2.916 0 01.526 1.714zM66.779 11.245a7.3 7.3 0 00-1.184-3.035 4.935 4.935 0 00-4.33-1.9 6.591 6.591 0 00-3.184.72 16.221 16.221 0 00-1.984 1.251V.004h-6.258v23.854h6.258v-11.24a9.673 9.673 0 011.31-.96 2.832 2.832 0 011.456-.343 1.662 1.662 0 011.382.548 3.79 3.79 0 01.437 2.194v7.861zM101.832 6.724l-2.115 12.408h-.146l-2.833-12.41h-5.312l-2.7 12.408h-.145l-2.1-12.409h-6.186l4.36 17.141h7.131l2.042-11h.146l2.179 11h7.276l4.154-17.138z" />
      </g>
    </svg>
  );
};

export default Logo;
