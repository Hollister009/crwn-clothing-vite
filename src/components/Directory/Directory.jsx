import './Directory.scss';
import { CATEGORIES } from '../../constants';
import Category from '../Category';

const Directory = () => (
  <div className="categories-container">
    {CATEGORIES.map(({ id, ...restProps }) => (
      <Category key={id} {...restProps} />
    ))}
  </div>
);

export default Directory;
