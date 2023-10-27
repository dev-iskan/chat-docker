import type { RootState } from '@/stores/index';
import { formatDate } from '@/utils/formatDate';
import { formatColor } from '@/utils/formatColor';

export const getters = {
  getUserData(state: RootState) {
    if (state.user === null) {
      let userString = localStorage.getItem('user');
      state.user = JSON.parse(userString);
    }
    return state.user;
  },
  getExtendedMessagesList(state: RootState) {
    return state.messages
      ?.map((message) => {
        return {
          ...message,
          _created_at_date: formatDate(message.created_at, 'dd MMM yyy'),
          _created_at_time: formatDate(message.created_at, 'HH:mm'),
          _message_color: formatColor(message.user_id),
          _avatar_color: formatColor(message.user_id)
        };
      })
      .reverse();
  },
  getPaginationValues(state: RootState) {
    return {
      current_page: state.current_page,
      from: state.from,
      last_page: state.last_page
    };
  }
};
