import { Callout as CalloutComponent } from '../../components/Callout';

export const Callout = {
  render: CalloutComponent,
  description: 'Display the enclosed content in a callout box',
  attributes: {
    title: { type: String },
    type: {
      type: String,
      default: 'note',
      matches: ['note', 'warning'],
      errorLevel: 'critical',
    },
  },
};
