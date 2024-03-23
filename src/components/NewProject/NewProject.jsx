import Input from '../Input/Input';

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label='Title' />
        <Input label='Description' textarea />
        <Input label='Due date' />
      </div>
    </div>
  );
}