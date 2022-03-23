import { CATEGORIES } from '../../constants';
import Category from '../Category';
import './Directory.scss';

const Directory = () => (
  <div className="categories-container">
    {CATEGORIES.map(({ id, ...restProps }) => (
      <Category key={id} {...restProps} />
    ))}
  </div>
);

export default Directory;
