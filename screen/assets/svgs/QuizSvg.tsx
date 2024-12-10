import { Svg, Path, Rect, Circle, Line } from 'react-native-svg';

export const ShowImage = () => {
  return (
    <Svg
      transform="rotate(-10)"
      width="115"
      height="97"
      viewBox="0 -6 64 66"
      fill="none">
      <Path
        d="M63.5 31.5803C63.5 48.7393 49.4032 62.6606 32 62.6606C14.5968 62.6606 0.5 48.7393 0.5 31.5803C0.5 14.4213 14.5968 0.5 32 0.5C49.4032 0.5 63.5 14.4213 63.5 31.5803Z"
        stroke="#E04E92"
      />
      <Path
        d="M28.5 25.1656C28.5 26.7909 27.1631 28.1197 25.5 28.1197C23.8369 28.1197 22.5 26.7909 22.5 25.1656C22.5 23.5403 23.8369 22.2115 25.5 22.2115C27.1631 22.2115 28.5 23.5403 28.5 25.1656Z"
        stroke="#E04E92"
      />
      <Path
        d="M23 35.0344L14.5 40.9557V47.8639H50.5V40.9557L40 31.5803L31 40.9557L23 35.0344Z"
        stroke="#E04E92"
      />
      <Rect x="14.5" y="15.3033" width="36" height="32.5541" stroke="#E04E92" />
      <Path
        d="M55.0001 52.7984L52.9576 65C54.9668 61.1332 59.9281 50.4573 60.5 44.9033"
        stroke="#E04E92"
      />
    </Svg>
  );
};

export const Exit = () => {
  return (
    <Svg width="37" height="37" viewBox="-1 -1 58 58" fill="none">
      <Line
        x1="41.3536"
        y1="15.3536"
        x2="16.3536"
        y2="40.3536"
        stroke="black"
        strokeWidth="2"
      />
      <Line
        x1="16.3536"
        y1="14.6464"
        x2="41.3536"
        y2="39.6464"
        stroke="black"
        strokeWidth="2"
      />
    </Svg>
  );
};

export const ExitAnswer = () => {
  return (
    <Svg width="37" height="37" viewBox="-1 -1 58 58" fill="none">
      <Line
        x1="41.3536"
        y1="15.3536"
        x2="16.3536"
        y2="40.3536"
        stroke="#888888"
        strokeWidth="2"
      />
      <Line
        x1="16.3536"
        y1="14.6464"
        x2="41.3536"
        y2="39.6464"
        stroke="#888888"
        strokeWidth="2"
      />
    </Svg>
  );
};

export const Clue = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4999 6.9999C11.4999 7.59085 11.3835 8.17601 11.1574 8.72197C10.9312 9.26794 10.5997 9.76401 10.1819 10.1819C9.76401 10.5997 9.26794 10.9312 8.72197 11.1574C8.17601 11.3835 7.59085 11.4999 6.9999 11.4999C6.40895 11.4999 5.82379 11.3835 5.27782 11.1574C4.73186 10.9312 4.23578 10.5997 3.81792 10.1819C3.40005 9.76401 3.06859 9.26794 2.84244 8.72197C2.61629 8.17601 2.4999 7.59085 2.4999 6.9999C2.4999 5.80642 2.974 4.66183 3.81792 3.81792C4.66183 2.974 5.80642 2.4999 6.9999 2.4999C8.19337 2.4999 9.33796 2.974 10.1819 3.81792C11.0258 4.66183 11.4999 5.80642 11.4999 6.9999ZM10.6799 11.7399C9.47427 12.6759 7.95726 13.1172 6.4377 12.974C4.91813 12.8309 3.51024 12.114 2.50065 10.9693C1.49105 9.82461 0.955648 8.3382 1.00343 6.81265C1.05122 5.2871 1.6786 3.8371 2.75785 2.75785C3.8371 1.6786 5.2871 1.05122 6.81265 1.00343C8.3382 0.955648 9.82461 1.49105 10.9693 2.50065C12.114 3.51024 12.8309 4.91813 12.974 6.4377C13.1172 7.95726 12.6759 9.47427 11.7399 10.6799L14.5299 13.4699C14.6036 13.5386 14.6627 13.6214 14.7037 13.7134C14.7447 13.8054 14.7667 13.9047 14.7685 14.0054C14.7703 14.1061 14.7517 14.2061 14.714 14.2995C14.6763 14.3929 14.6202 14.4777 14.5489 14.5489C14.4777 14.6202 14.3929 14.6763 14.2995 14.714C14.2061 14.7517 14.1061 14.7703 14.0054 14.7685C13.9047 14.7667 13.8054 14.7447 13.7134 14.7037C13.6214 14.6627 13.5386 14.6036 13.4699 14.5299L10.6799 11.7399Z"
        fill="#E04E92"
      />
    </Svg>
  );
};

export const Draw = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 11 11" fill="none">
      <Path
        d="M1.51966 7.4596C0.686412 8.278 1.39041 9.1184 0.283812 10.363C-0.215588 10.9257 2.33971 10.7541 3.60526 9.51C4.14261 8.98145 3.99081 8.21255 3.41496 7.64605C2.83911 7.08065 2.05646 6.93105 1.51966 7.4596ZM10.7465 0.362397C10.3197 -0.0578026 5.58801 3.73335 4.18001 5.1177C3.48096 5.8052 3.24776 6.1737 3.03381 6.4487C2.94031 6.56915 3.06406 6.60545 3.11851 6.6335C3.39571 6.7754 3.58931 6.9063 3.83956 7.15215C4.09036 7.398 4.22401 7.5883 4.36701 7.8611C4.39616 7.915 4.43356 8.036 4.55511 7.9447C4.83561 7.73405 5.21016 7.50415 5.90921 6.81775C7.31776 5.43395 11.1744 0.782047 10.7465 0.362397Z"
        fill="black"
      />
    </Svg>
  );
};

export const Write = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 16 16" fill="none">
      <Path
        d="M1 11.8999L0 15.9999L4.1 14.9999L13.3 5.79995L10.2 2.69995L1 11.8999ZM1.5 14.9999L1.1 14.4999L1.5 12.4999L3.5 14.4999L1.5 14.9999ZM10.9 4.39995L2.8 12.3999L2.2 11.7999L10.3 3.79995L10.9 4.39995ZM15.3 0.699948C14.2 -0.400052 12.7 0.199948 12.7 0.199948L11.2 1.69995L14.3 4.79995L15.8 3.29995C15.8 3.19995 16.4 1.79995 15.3 0.699948ZM13.4 1.59995L12.9 1.09995C13.5 0.499948 14 0.999948 14 0.999948L13.4 1.59995Z"
        fill="black"
      />
    </Svg>
  );
};

export const Eraser = () => {
  return (
    <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.4101 5.505C13.0801 3.835 13.9151 3 14.9521 3C15.9901 3 16.8251 3.835 18.4951 5.505C20.1651 7.175 21.0001 8.01 21.0001 9.048C21.0001 10.085 20.1651 10.92 18.4951 12.59L14.3021 16.784L7.21606 9.698L11.4101 5.505Z"
        fill="black"
      />
      <Path
        d="M6.156 10.759L13.241 17.844L12.591 18.494C12.213 18.873 11.878 19.208 11.573 19.5H21C21.1989 19.5 21.3897 19.5791 21.5303 19.7197C21.671 19.8604 21.75 20.0511 21.75 20.25C21.75 20.4489 21.671 20.6397 21.5303 20.7804C21.3897 20.921 21.1989 21 21 21H9C7.984 20.975 7.15 20.14 5.505 18.495C3.835 16.825 3 15.99 3 14.952C3 13.915 3.835 13.08 5.505 11.41L6.156 10.759Z"
        fill="black"
      />
    </Svg>
  );
};

export const Correct = ({ backgroundColor }) => {
  return (
    <Svg width="60" height="80" viewBox="0 0 27 36" fill="none">
      <Path
        d="M26.5 18.2535L26.5 35.4999C21.6591 35.4971 15.2733 35.4205 10.0299 33.3176C7.32941 32.2346 4.9562 30.6225 3.25553 28.224C1.55644 25.8277 0.499998 22.6063 0.499998 18.2535C0.499999 13.7711 1.55789 10.4526 3.25932 7.98449C4.96163 5.51512 7.33564 3.85719 10.0344 2.74391C15.2757 0.581852 21.659 0.50297 26.5 0.500109L26.5 0.524288L26.5 0.567051L26.5 0.609674L26.5 0.652158L26.5 0.694503L26.5 0.736711L26.5 0.778782L26.5 0.820717L26.5 0.862516L26.5 0.90418L26.5 0.94571L26.5 0.987106L26.5 1.02837L26.5 1.0695L26.5 1.1105L26.5 1.15137L26.5 1.1921L26.5 1.23271L26.5 1.27319L26.5 1.31354L26.5 1.35377L26.5 1.39386L26.5 1.43383L26.5 1.47368L26.5 1.51339L26.5 1.55299L26.5 1.59246L26.5 1.63181L26.5 1.67103L26.5 1.71014L26.5 1.74912L26.5 1.78798L26.5 1.82673L26.5 1.86535L26.5 1.90386L26.5 1.94224L26.5 1.98051L26.5 2.01867L26.5 2.05671L26.5 2.09463L26.5 2.13244L26.5 2.17013L26.5 2.20772L26.5 2.24519L26.5 2.28255L26.5 2.31979L26.5 2.35693L26.5 2.39396L26.5 2.43087L26.5 2.46768L26.5 2.50439L26.5 2.54098L26.5 2.57747L26.5 2.61385L26.5 2.65013L26.5 2.6863L26.5 2.72237L26.5 2.75834L26.5 2.7942L26.5 2.82996L26.5 2.86563L26.5 2.90119L26.5 2.93665L26.5 2.97201L26.5 3.00727L26.5 3.04244L26.5 3.07751L26.5 3.11248L26.5 3.14736L26.5 3.18214L26.5 3.21682L26.5 3.25142L26.5 3.28592L26.5 3.32033L26.5 3.35464L26.5 3.38887L26.5 3.423L26.5 3.45704L26.5 3.491L26.5 3.52487L26.5 3.55865L26.5 3.59234L26.5 3.62594L26.5 3.65946L26.5 3.6929L26.5 3.72625L26.5 3.75951L26.5 3.7927L26.5 3.8258L26.5 3.85882L26.5 3.89176L26.5 3.92461L26.5 3.95739L26.5 3.99009L26.5 4.02271L26.5 4.05525L26.5 4.08772L26.5 4.1201L26.5 4.15242L26.5 4.18466L26.5 4.21682L26.5 4.24891L26.5 4.28092L26.5 4.31287L26.5 4.34474L26.5 4.37654L26.5 4.40827L26.5 4.43993L26.5 4.47152L26.5 4.50304L26.5 4.5345L26.5 4.56589L26.5 4.59721L26.5 4.62846L26.5 4.65965L26.5 4.69078L26.5 4.72184L26.5 4.75284L26.5 4.78377L26.5 4.81465L26.5 4.84546L26.5 4.87621L26.5 4.90691L26.5 4.93754L26.5 4.96811L26.5 4.99863L26.5 5.02909L26.5 5.05949L26.5 5.08984L26.5 5.12013L26.5 5.15037L26.5 5.18056L26.5 5.21069L26.5 5.24076L26.5 5.27079L26.5 5.30077L26.5 5.33069L26.5 5.36056L26.5 5.39039L26.5 5.42017L26.5 5.4499L26.5 5.47958L26.5 5.50921L26.5 5.5388L26.5 5.56835L26.5 5.59784L26.5 5.6273L26.5 5.65671L26.5 5.68608L26.5 5.71541L26.5 5.7447L26.5 5.77394L26.5 5.80315L26.5 5.83231L26.5 5.86144L26.5 5.89053L26.5 5.91959L26.5 5.9486L26.5 5.97758L26.5 6.00653L26.5 6.03544L26.5 6.06431L26.5 6.09316L26.5 6.12197L26.5 6.15075L26.5 6.1795L26.5 6.20821L26.5 6.2369L26.5 6.26556L26.5 6.29419L26.5 6.32279L26.5 6.35136L26.5 6.37991L26.5 6.40843L26.5 6.43693L26.5 6.4654L26.5 6.49385L26.5 6.52227L26.5 6.55067L26.5 6.57905L26.5 6.60741L26.5 6.63575L26.5 6.66406L26.5 6.69236L26.5 6.72064L26.5 6.7489L26.5 6.77715L26.5 6.80538L26.5 6.83359L26.5 6.86179L26.5 6.88997L26.5 6.91814L26.5 6.94629L26.5 6.97443L26.5 7.00256L26.5 7.03068L26.5 7.05879L26.5 7.08689L26.5 7.11498L26.5 7.14306L26.5 7.17113L26.5 7.19919L26.5 7.22725L26.5 7.2553L26.5 7.28335L26.5 7.31139L26.5 7.33943L26.5 7.36746L26.5 7.3955L26.5 7.42353L26.5 7.45155L26.5 7.47958L26.5 7.50761L26.5 7.53564L26.5 7.56367L26.5 7.5917L26.5 7.61973L26.5 7.64777L26.5 7.67581L26.5 7.70386L26.5 7.73191L26.5 7.75997L26.5 7.78803L26.5 7.81611L26.5 7.84419L26.5 7.87227L26.5 7.90037L26.5 7.92848L26.5 7.9566L26.5 7.98473L26.5 8.01287L26.5 8.04102L26.5 8.06919L26.5 8.09737L26.5 8.12556L26.5 8.15378L26.5 8.182L26.5 8.21025L26.5 8.23851L26.5 8.26679L26.5 8.29508L26.5 8.3234L26.5 8.35174L26.5 8.38009L26.5 8.40847L26.5 8.43687L26.5 8.46529L26.5 8.49374L26.5 8.52221L26.5 8.5507L26.5 8.57922L26.5 8.60777L26.5 8.63634L26.5 8.66494L26.5 8.69357L26.5 8.72223L26.5 8.75091L26.5 8.77963L26.5 8.80837L26.5 8.83715L26.5 8.86596L26.5 8.8948L26.5 8.92367L26.5 8.95258L26.5 8.98152L26.5 9.0105L26.5 9.03952L26.5 9.06857L26.5 9.09766L26.5 9.12678L26.5 9.15595L26.5 9.18515L26.5 9.21439L26.5 9.24368L26.5 9.273L26.5 9.30237L26.5 9.33178L26.5 9.36123L26.5 9.39073L26.5 9.42027L26.5 9.44986L26.5 9.47949L26.5 9.50917L26.5 9.53889L26.5 9.56867L26.5 9.59849L26.5 9.62836L26.5 9.65828L26.5 9.68825L26.5 9.71828L26.5 9.74835L26.5 9.77848L26.5 9.80866L26.5 9.83889L26.5 9.86918L26.5 9.89953L26.5 9.92992L26.5 9.96038L26.5 9.99089L26.5 10.0215L26.5 10.0521L26.5 10.0828L26.5 10.1135L26.5 10.1443L26.5 10.1752L26.5 10.2061L26.5 10.2371L26.5 10.2682L26.5 10.2993L26.5 10.3305L26.5 10.3618L26.5 10.3931L26.5 10.4245L26.5 10.4559L26.5 10.4874L26.5 10.519L26.5 10.5507L26.5 10.5824L26.5 10.6142L26.5 10.6461L26.5 10.678L26.5 10.71L26.5 10.7421L26.5 10.7743L26.5 10.8065L26.5 10.8388L26.5 10.8712L26.5 10.9036L26.5 10.9362L26.5 10.9688L26.5 11.0015L26.5 11.0343L26.5 11.0671L26.5 11.1L26.5 11.1331L26.5 11.1662L26.5 11.1993L26.5 11.2326L26.5 11.2659L26.5 11.2994L26.5 11.3329L26.5 11.3665L26.5 11.4002L26.5 11.4339L26.5 11.4678L26.5 11.5018L26.5 11.5358L26.5 11.5699L26.5 11.6041L26.5 11.6384L26.5 11.6729L26.5 11.7073L26.5 11.7419L26.5 11.7766L26.5 11.8114L26.5 11.8463L26.5 11.8812L26.5 11.9163L26.5 11.9514L26.5 11.9867L26.5 12.0221L26.5 12.0575L26.5 12.0931L26.5 12.1287L26.5 12.1645L26.5 12.2003L26.5 12.2363L26.5 12.2724L26.5 12.3085L26.5 12.3448L26.5 12.3812L26.5 12.4177L26.5 12.4542L26.5 12.4909L26.5 12.5277L26.5 12.5647L26.5 12.6017L26.5 12.6388L26.5 12.676L26.5 12.7134L26.5 12.7509L26.5 12.7884L26.5 12.8261L26.5 12.8639L26.5 12.9018L26.5 12.9399L26.5 12.978L26.5 13.0163L26.5 13.0547L26.5 13.0932L26.5 13.1318L26.5 13.1705L26.5 13.2094L26.5 13.2483L26.5 13.2874L26.5 13.3267L26.5 13.366L26.5 13.4055L26.5 13.4451L26.5 13.4848L26.5 13.5246L26.5 13.5646L26.5 13.6047L26.5 13.6449L26.5 13.6852L26.5 13.7257L26.5 13.7663L26.5 13.807L26.5 13.8479L26.5 13.8889L26.5 13.93L26.5 13.9712L26.5 14.0126L26.5 14.0541L26.5 14.0958L26.5 14.1376L26.5 14.1795L26.5 14.2216L26.5 14.2638L26.5 14.3061L26.5 14.3486L26.5 14.3912L26.5 14.434L26.5 14.4769L26.5 14.5199L26.5 14.5631L26.5 14.6064L26.5 14.6499L26.5 14.6935L26.5 14.7372L26.5 14.7811L26.5 14.8251L26.5 14.8693L26.5 14.9137L26.5 14.9581L26.5 15.0028L26.5 15.0476L26.5 15.0925L26.5 15.1376L26.5 15.1828L26.5 15.2282L26.5 15.2737L26.5 15.3194L26.5 15.3652L26.5 15.4112L26.5 15.4574L26.5 15.5037L26.5 15.5501L26.5 15.5967L26.5 15.6435L26.5 15.6905L26.5 15.7375L26.5 15.7848L26.5 15.8322L26.5 15.8798L26.5 15.9275L26.5 15.9754L26.5 16.0235L26.5 16.0717L26.5 16.1201L26.5 16.1686L26.5 16.2173L26.5 16.2662L26.5 16.3153L26.5 16.3645L26.5 16.4139L26.5 16.4634L26.5 16.5132L26.5 16.5631L26.5 16.6131L26.5 16.6634L26.5 16.7138L26.5 16.7644L26.5 16.8151L26.5 16.866L26.5 16.9171L26.5 16.9684L26.5 17.0199L26.5 17.0715L26.5 17.1233L26.5 17.1753L26.5 17.2275L26.5 17.2798L26.5 17.3324L26.5 17.3851L26.5 17.438L26.5 17.491L26.5 17.5443L26.5 17.5977L26.5 17.6513L26.5 17.7051L26.5 17.7591L26.5 17.8133L26.5 17.8677L26.5 17.9222L26.5 17.977L26.5 18.0319L26.5 18.087L26.5 18.1423L26.5 18.1978L26.5 18.2535Z"
        stroke={backgroundColor} strokeWidth={1}
      />
      <Circle
        cx="14"
        cy="18"
        r="6"
        transform="rotate(-180 14 18)"
        fill={backgroundColor}
        strokeWidth={1}
      />
      <Circle
        cx="14"
        cy="18"
        r="4.5"
        transform="rotate(-180 14 18)"
        fill="white"
        strokeWidth={1}
      />
    </Svg>
  );
};

export const ToggleTag = () => {
  return (
    <Svg width="17.4" height="30" viewBox="0 0 14 24" fill="none">
      <Path
        d="M5.366 9.12412C5.98986 8.48744 6.30138 8.1689 6.70612 8.05063C7.11086 7.93195 7.54062 8.03332 8.39974 8.23607L8.89527 8.35269C9.6184 8.52288 9.97996 8.60819 10.2277 8.8608C10.4751 9.11382 10.5586 9.48305 10.7253 10.2215L10.8399 10.7276C11.038 11.6053 11.1373 12.0438 11.0215 12.4571C10.9053 12.8704 10.5933 13.1885 9.96987 13.8252L9.23141 14.5793C8.14592 15.6883 7.60357 16.2417 6.92968 16.2417C6.25538 16.2417 5.71303 15.6879 4.62794 14.5797C3.54244 13.4712 3.0001 12.9174 3.0001 12.2288C3.0001 11.5406 3.54245 10.9863 4.62754 9.87824L5.366 9.12412Z"
        stroke="#E04E92"
        stroke-width="1"
      />
      <Path
        d="M7.72424 11.3052C8.03942 11.6271 8.55042 11.6271 8.8656 11.3052C9.18078 10.9834 9.18078 10.4615 8.8656 10.1397C8.55042 9.8178 8.03942 9.8178 7.72424 10.1397C7.40907 10.4615 7.40907 10.9834 7.72424 11.3052Z"
        stroke="#E04E92"
        stroke-width="1"
      />
      <Path
        d="M4.41236 11.9321L7.229 14.8081"
        stroke="#E04E92"
        stroke-width="1"
        stroke-linecap="round"
      />
      <Rect
        x="0.75"
        y="0.75"
        width="12.5"
        height="22.5"
        rx="3.25"
        stroke="#E04E92"
        stroke-width="1.5"
      />
    </Svg>
  );
};

export const Wrong = ({ backgroundColor }) => {
  return (
    <Svg width="60" height="80" viewBox="0 0 27 36" fill="none">
      <Path
        d="M0.500002 17.7465L0.500003 0.500101C5.34085 0.502878 11.7267 0.579505 16.9701 2.68238C19.6706 3.76541 22.0438 5.37753 23.7445 7.776C25.4436 10.1723 26.5 13.3937 26.5 17.7465C26.5 22.2289 25.4421 25.5474 23.7407 28.0155C22.0384 30.4849 19.6644 32.1428 16.9656 33.2561C11.7243 35.4181 5.34097 35.497 0.5 35.4999L0.5 35.4751L0.5 35.4322L0.5 35.3895L0.5 35.3469L0.5 35.3044L0.5 35.262L0.5 35.2198L0.5 35.1777L0.5 35.1357L0.5 35.0939L0.5 35.0522L0.5 35.0106L0.5 34.9692L0.5 34.9278L0.5 34.8866L0.5 34.8455L0.5 34.8046L0.5 34.7637L0.5 34.723L0.5 34.6824L0.5 34.6419L0.5 34.6015L0.5 34.5613L0.5 34.5212L0.5 34.4812L0.5 34.4413L0.5 34.4015L0.5 34.3619L0.5 34.3223L0.5 34.2829L0.5 34.2436L0.5 34.2044L0.5 34.1653L0.5 34.1263L0.5 34.0875L0.5 34.0487L0.5 34.0101L0.5 33.9715L0.5 33.9331L0.5 33.8948L0.5 33.8566L0.5 33.8185L0.5 33.7805L0.5 33.7426L0.5 33.7049L0.5 33.6672L0.5 33.6296L0.5 33.5921L0.5 33.5548L0.5 33.5175L0.5 33.4804L0.5 33.4433L0.5 33.4064L0.5 33.3695L0.5 33.3327L0.5 33.2961L0.5 33.2595L0.5 33.2231L0.5 33.1867L0.5 33.1504L0.5 33.1143L0.5 33.0782L0.5 33.0422L0.5 33.0063L0.5 32.9705L0.5 32.9348L0.5 32.8992L0.5 32.8637L0.5 32.8283L0.5 32.7929L0.5 32.7577L0.5 32.7225L0.5 32.6875L0.5 32.6525L0.5 32.6176L0.5 32.5828L0.5 32.5481L0.5 32.5134L0.5 32.4789L0.5 32.4444L0.5 32.41L0.5 32.3757L0.5 32.3415L0.5 32.3074L0.5 32.2733L0.5 32.2393L0.5 32.2054L0.5 32.1716L0.5 32.1379L0.5 32.1042L0.5 32.0706L0.5 32.0371L0.5 32.0037L0.5 31.9704L0.5 31.9371L0.5 31.9039L0.5 31.8708L0.5 31.8377L0.5 31.8047L0.5 31.7718L0.5 31.739L0.5 31.7062L0.5 31.6735L0.5 31.6409L0.5 31.6083L0.5 31.5758L0.5 31.5434L0.5 31.511L0.5 31.4787L0.5 31.4465L0.5 31.4143L0.5 31.3822L0.5 31.3502L0.5 31.3182L0.5 31.2863L0.5 31.2545L0.5 31.2227L0.5 31.191L0.5 31.1593L0.5 31.1277L0.5 31.0962L0.5 31.0647L0.5 31.0333L0.5 31.0019L0.5 30.9706L0.5 30.9393L0.5 30.9081L0.5 30.877L0.5 30.8459L0.5 30.8149L0.5 30.7839L0.5 30.7529L0.5 30.7221L0.5 30.6912L0.5 30.6604L0.5 30.6297L0.5 30.599L0.5 30.5684L0.5 30.5378L0.5 30.5073L0.5 30.4768L0.5 30.4464L0.5 30.416L0.5 30.3856L0.5 30.3553L0.5 30.325L0.5 30.2948L0.500001 30.2646L0.500001 30.2345L0.500001 30.2044L0.500001 30.1743L0.500001 30.1443L0.500001 30.1144L0.500001 30.0844L0.500001 30.0545L0.500001 30.0247L0.500001 29.9948L0.500001 29.9651L0.500001 29.9353L0.500001 29.9056L0.500001 29.8759L0.500001 29.8463L0.500001 29.8166L0.500001 29.7871L0.500001 29.7575L0.500001 29.728L0.500001 29.6985L0.500001 29.6691L0.500001 29.6396L0.500001 29.6102L0.500001 29.5809L0.500001 29.5515L0.500001 29.5222L0.500001 29.4929L0.500001 29.4637L0.500001 29.4344L0.500001 29.4052L0.500001 29.376L0.500001 29.3469L0.500001 29.3177L0.500001 29.2886L0.500001 29.2595L0.500001 29.2305L0.500001 29.2014L0.500001 29.1724L0.500001 29.1433L0.500001 29.1144L0.500001 29.0854L0.500001 29.0564L0.500001 29.0275L0.500001 28.9985L0.500001 28.9696L0.500001 28.9407L0.500001 28.9119L0.500001 28.883L0.500001 28.8541L0.500001 28.8253L0.500001 28.7965L0.500001 28.7676L0.500001 28.7388L0.500001 28.71L0.500001 28.6812L0.500001 28.6525L0.500001 28.6237L0.500001 28.5949L0.500001 28.5662L0.500001 28.5374L0.500001 28.5087L0.500001 28.4799L0.500001 28.4512L0.500001 28.4225L0.500001 28.3938L0.500001 28.365L0.500001 28.3363L0.500001 28.3076L0.500001 28.2789L0.500001 28.2501L0.500001 28.2214L0.500001 28.1927L0.500001 28.164L0.500001 28.1353L0.500001 28.1065L0.500001 28.0778L0.500001 28.0491L0.500001 28.0203L0.500001 27.9916L0.500001 27.9628L0.500001 27.9341L0.500001 27.9053L0.500001 27.8765L0.500001 27.8478L0.500001 27.819L0.500001 27.7902L0.500001 27.7614L0.500001 27.7326L0.500001 27.7037L0.500001 27.6749L0.500001 27.646L0.500001 27.6172L0.500001 27.5883L0.500001 27.5594L0.500001 27.5305L0.500001 27.5016L0.500001 27.4726L0.500001 27.4437L0.500001 27.4147L0.500001 27.3857L0.500001 27.3567L0.500001 27.3276L0.500001 27.2986L0.500001 27.2695L0.500001 27.2404L0.500001 27.2113L0.500001 27.1822L0.500001 27.153L0.500001 27.1238L0.500001 27.0946L0.500001 27.0654L0.500001 27.0361L0.500001 27.0069L0.500001 26.9775L0.500001 26.9482L0.500001 26.9188L0.500001 26.8894L0.500001 26.86L0.500001 26.8306L0.500001 26.8011L0.500001 26.7716L0.500001 26.742L0.500001 26.7125L0.500001 26.6828L0.500001 26.6532L0.500001 26.6235L0.500001 26.5938L0.500001 26.5641L0.500001 26.5343L0.500001 26.5045L0.500001 26.4746L0.500001 26.4447L0.500001 26.4148L0.500001 26.3848L0.500001 26.3548L0.500001 26.3248L0.500001 26.2947L0.500001 26.2645L0.500001 26.2344L0.500001 26.2041L0.500001 26.1739L0.500001 26.1436L0.500001 26.1132L0.500001 26.0828L0.500001 26.0524L0.500001 26.0219L0.500001 25.9914L0.500001 25.9608L0.500001 25.9302L0.500001 25.8995L0.500001 25.8688L0.500001 25.838L0.500001 25.8072L0.500001 25.7763L0.500001 25.7454L0.500001 25.7144L0.500001 25.6834L0.500001 25.6523L0.500001 25.6211L0.500001 25.59L0.500001 25.5587L0.500001 25.5274L0.500001 25.496L0.500001 25.4646L0.500001 25.4331L0.500001 25.4016L0.500001 25.37L0.500001 25.3384L0.500001 25.3066L0.500001 25.2749L0.500001 25.243L0.500001 25.2111L0.500001 25.1792L0.500001 25.1471L0.500001 25.115L0.500001 25.0829L0.500001 25.0507L0.500001 25.0184L0.500001 24.986L0.500001 24.9536L0.500001 24.9211L0.500001 24.8886L0.500001 24.856L0.500001 24.8233L0.500001 24.7905L0.500001 24.7577L0.500001 24.7248L0.500001 24.6918L0.500001 24.6587L0.500001 24.6256L0.500001 24.5924L0.500001 24.5592L0.500001 24.5258L0.500001 24.4924L0.500001 24.4589L0.500001 24.4253L0.500001 24.3917L0.500001 24.3579L0.500001 24.3241L0.500001 24.2903L0.500001 24.2563L0.500001 24.2222L0.500001 24.1881L0.500001 24.1539L0.500001 24.1196L0.500001 24.0852L0.500001 24.0508L0.500001 24.0162L0.500001 23.9816L0.500001 23.9469L0.500001 23.9121L0.500001 23.8772L0.500001 23.8422L0.500001 23.8072L0.500001 23.772L0.500001 23.7368L0.500001 23.7015L0.500001 23.6661L0.500001 23.6305L0.500001 23.5949L0.500001 23.5593L0.500001 23.5235L0.500001 23.4876L0.500001 23.4516L0.500001 23.4156L0.500001 23.3794L0.500001 23.3431L0.500001 23.3068L0.500001 23.2703L0.500001 23.2338L0.500001 23.1971L0.500001 23.1604L0.500001 23.1236L0.500001 23.0866L0.500001 23.0496L0.500001 23.0124L0.500001 22.9752L0.500001 22.9378L0.500001 22.9004L0.500001 22.8628L0.500001 22.8252L0.500001 22.7874L0.500001 22.7495L0.500001 22.7115L0.500001 22.6735L0.500001 22.6353L0.500001 22.597L0.500001 22.5586L0.500001 22.52L0.500001 22.4814L0.500001 22.4427L0.500001 22.4038L0.500001 22.3649L0.500001 22.3258L0.500001 22.2866L0.500001 22.2473L0.500001 22.2079L0.500001 22.1684L0.500001 22.1287L0.500001 22.089L0.500001 22.0491L0.500001 22.0091L0.500001 21.969L0.500001 21.9288L0.500001 21.8884L0.500001 21.8479L0.500001 21.8074L0.500001 21.7666L0.500001 21.7258L0.500001 21.6849L0.500001 21.6438L0.500001 21.6026L0.500001 21.5613L0.500001 21.5198L0.500001 21.4782L0.500001 21.4365L0.500001 21.3947L0.500001 21.3528L0.500001 21.3107L0.500001 21.2685L0.500001 21.2262L0.500001 21.1837L0.500001 21.1411L0.500001 21.0984L0.500001 21.0555L0.500001 21.0125L0.500001 20.9694L0.500001 20.9261L0.500001 20.8828L0.500001 20.8392L0.500001 20.7956L0.500001 20.7518L0.500001 20.7079L0.500001 20.6638L0.500001 20.6196L0.500001 20.5753L0.500001 20.5308L0.500001 20.4862L0.500001 20.4414L0.500001 20.3965L0.500001 20.3515L0.500001 20.3063L0.500001 20.261L0.500001 20.2155L0.500001 20.1699L0.500001 20.1241L0.500001 20.0782L0.500001 20.0322L0.500001 19.986L0.500001 19.9397L0.500001 19.8932L0.500001 19.8465L0.500001 19.7998L0.500001 19.7528L0.500001 19.7057L0.500001 19.6585L0.500001 19.6111L0.500001 19.5636L0.500001 19.5159L0.500001 19.4681L0.500001 19.4201L0.500001 19.372L0.500001 19.3237L0.500001 19.2752L0.500001 19.2266L0.500001 19.1778L0.500001 19.1289L0.500001 19.0798L0.500001 19.0306L0.500001 18.9812L0.500001 18.9316L0.500001 18.8819L0.500002 18.8321L0.500002 18.782L0.500002 18.7318L0.500002 18.6815L0.500002 18.6309L0.500002 18.5802L0.500002 18.5294L0.500002 18.4784L0.500002 18.4272L0.500002 18.3758L0.500002 18.3243L0.500002 18.2726L0.500002 18.2208L0.500002 18.1688L0.500002 18.1166L0.500002 18.0642L0.500002 18.0117L0.500002 17.959L0.500002 17.9061L0.500002 17.8531L0.500002 17.7999L0.500002 17.7465Z"
        stroke={backgroundColor} strokeWidth={1}
      />
      <Path
        d="M7.40907 21.4731C7.28554 21.5884 7.1859 21.7269 7.11585 21.8807C7.0458 22.0345 7.0067 22.2006 7.00079 22.3695C6.99488 22.5384 7.02227 22.7069 7.0814 22.8652C7.14053 23.0235 7.23024 23.1687 7.34541 23.2923C7.46058 23.4159 7.59896 23.5156 7.75263 23.5857C7.90631 23.6558 8.07228 23.695 8.24107 23.7009C8.40985 23.7068 8.57815 23.6794 8.73635 23.6202C8.89455 23.561 9.03956 23.4713 9.16309 23.356L12.9257 19.8451L16.4338 23.6121C16.6685 23.8527 16.988 23.9918 17.3239 23.9996C17.6598 24.0075 17.9855 23.8834 18.2311 23.654C18.4768 23.4247 18.623 23.1081 18.6385 22.7722C18.6539 22.4363 18.5374 22.1077 18.3138 21.8567L14.8058 18.091L18.5697 14.5801C18.6976 14.466 18.8014 14.3275 18.8751 14.1727C18.9488 14.0179 18.9908 13.8499 18.9986 13.6786C19.0065 13.5073 18.9801 13.3362 18.921 13.1753C18.8619 13.0143 18.7712 12.8669 18.6543 12.7415C18.5374 12.6161 18.3967 12.5154 18.2404 12.4452C18.0841 12.375 17.9153 12.3368 17.744 12.3328C17.5728 12.3288 17.4024 12.3591 17.243 12.4219C17.0836 12.4847 16.9383 12.5788 16.8157 12.6986L13.0531 16.2081L9.54501 12.4425C9.43174 12.3121 9.29341 12.2059 9.13825 12.1302C8.9831 12.0545 8.8143 12.0108 8.64192 12.0018C8.46954 11.9927 8.29711 12.0185 8.1349 12.0776C7.97269 12.1367 7.82402 12.2278 7.69777 12.3456C7.57151 12.4634 7.47024 12.6055 7.4 12.7633C7.32976 12.9211 7.29198 13.0914 7.28892 13.2642C7.28586 13.4369 7.31758 13.6085 7.38218 13.7687C7.44679 13.9289 7.54296 14.0744 7.66497 14.1966L11.1717 17.9623L7.40907 21.4731Z"
        fill={backgroundColor} strokeWidth="0.5"
      />
    </Svg>
  );
};