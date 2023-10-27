import type { RootState } from '@/stores/index';
import { formatDate } from '@/utils/formatDate';

export const getters = {
  getUserData(state: RootState) {
    return state.user;
  },
  getMessagesList(state: RootState) {
    return state.messages;
  },
  getExtendedMessagesList(state: RootState) {
    return state.messages?.map((message) => {
      return {
        ...message,
        _created_at_date: formatDate(message.created_at, 'dd MMM yyy'),
        _created_at_time: formatDate(message.created_at, 'HH:mm')
      };
    });
  },
  getPaginationValues(state: RootState) {
    return {
      current_page: state.current_page,
      from: state.from,
      last_page: state.last_page
    };
  }
};
