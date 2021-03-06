import { Form } from 'react-bootstrap'
import { ReactComponent as TextSvg } from 'svgs/text.svg';
import { ReactComponent as LongSvg } from 'svgs/long_answer.svg';
import { ReactComponent as CheckSvg } from 'svgs/checkbox.svg';
import { ReactComponent as UploadSvg } from 'svgs/upload.svg';
import { ReactComponent as NumberSvg } from 'svgs/number.svg';
import { ReactComponent as PhoneSvg } from 'svgs/phone.svg';
import { ReactComponent as MailSvg } from 'svgs/address.svg';
import { ReactComponent as DropdownSvg } from 'svgs/dropdown.svg';
import { ReactComponent as LabelSvg } from 'svgs/label.svg';
interface Props {
  onAdd: (type: string) => void
}
export default function({
  onAdd
}:Props) {
  const compTypes = [
    { name: 'shortA', title: 'Short Answer' },
    { name: 'longA', title: 'Long Answer' },
    { name: 'checkbox', title: 'Check boxes' },
    { name: 'fileup', title: 'File Upload' },
    { name: 'number', title: 'Number' },
    { name: 'telephone', title: 'Phone Number' },
    { name: 'email', title: 'Email Address' },
    { name: 'dropdown', title: 'Drop Down' },
    { name: 'radio', title: 'Multi Choice' },
  ]

  const renderIcon = (name: string) => {
    switch(name) {
      case 'shortA':
        return <TextSvg />
      case 'longA':
        return <LongSvg />
      case 'checkbox':
        return <CheckSvg />
      case 'fileup':
        return <UploadSvg />
      case 'number':
        return <NumberSvg />
      case 'telephone':
        return <PhoneSvg />
      case 'email':
        return <MailSvg />
      case 'dropdown':
        return <DropdownSvg />
      case 'radio':
        return <LabelSvg style={{ width: 16, height: 16 }} />
      default:
        break;
    }
  }

  return (
    <div className="cform-add-container">
      <Form.Text>INPUT BLOCKS</Form.Text>
      <div className="cform-add-item-container">
        {compTypes.map(item => (
          <div className="cform-add-item" key={`additem-${item.name}`} onClick={(e) => onAdd(item.name)}>
            {renderIcon(item.name)}
            <Form.Text className="cform-add-item-text">{item.title}</Form.Text>
          </div>
        ))}
      </div>
    </div>
  )
}