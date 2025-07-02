// --- FILE: components/CalendarIcon.js ---
// Create this file in the `components` directory.

import Svg, { Path } from 'react-native-svg';

const CalendarIcon = () => (
    <Svg height="28" width="28" viewBox="0 0 24 24">
      <Path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" stroke="#6B4F3A" strokeWidth="1.5" />
      <Path d="M4 10V6a2 2 0 0 1 2-2h2" stroke="#6B4F3A" strokeWidth="1.5" />
      <Path d="M14 4h4a2 2 0 0 1 2 2v4" stroke="#6B4F3A" strokeWidth="1.5" />
      <Path d="M12 2v4" stroke="#6B4F3A" strokeWidth="1.5" />
      <Path d="M8 14h.01" stroke="#6B4F3A" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M12 14h.01" stroke="#6B4F3A" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M16 14h.01" stroke="#6B4F3A" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M8 18h.01" stroke="#6B4F3A" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M12 18h.01" stroke="#6B4F3A" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M16 18h.01" stroke="#6B4F3A" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
);
export default CalendarIcon;