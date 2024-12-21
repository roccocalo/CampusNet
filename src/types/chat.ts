export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  read: boolean;
}

export interface ChatPreview {
  id: string;
  user: {
    name: string;
    avatar: string;
    online: boolean;
  };
  lastMessage: {
    text: string;
    timestamp: string;
    unread: boolean;
  };
}

// Mock data
export const MOCK_CHATS: ChatPreview[] = [
  {
    id: '1',
    user: {
      name: 'Noemi Fazzini',
      avatar: '/assets/icons/profile-placeholder.svg',
      online: true
    },
    lastMessage: {
      text: 'Quando ci sentiamo per il meeting?',
      timestamp: '10:45 AM',
      unread: true
    }
  },
  {
    id: '2',
    user: {
      name: 'Rocco Calò',
      avatar: '/assets/icons/profile-placeholder.svg', //cambiare nomi e immagini profilo
      online: false
    },
    lastMessage: {
      text: 'Ho aggiunto i file',
      timestamp: '9:30 AM',
      unread: false
    }
  },
  {
    id: '3',
    user: {
      name: 'Alessandro Berardi',
      avatar: '/assets/icons/profile-placeholder.svg',
      online: true
    },
    lastMessage: {
      text: 'Grazie',
      timestamp: 'Yesterday',
      unread: false
    }
  }
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    content: 'Hey, hai iniziato a lavorare sulla presentazione?',
    sender: 'other',
    timestamp: '10:30 AM',
    read: true
  },
  {
    id: '2',
    content: 'Ciao si ci sto lavorando ora ;) ',
    sender: 'me',
    timestamp: '10:31 AM',
    read: true
  },
  {
    id: '3',
    content: 'Perfetto! Quando riesci a finire tutto ?',
    sender: 'other',
    timestamp: '10:31 AM',
    read: true
  },
  {
    id: '4',
    content: 'Domani mattina dovrebbe essere pronto',
    sender: 'me',
    timestamp: '10:32 AM',
    read: true
  }
];
