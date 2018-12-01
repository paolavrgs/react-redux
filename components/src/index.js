import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <Comment
          avatar= { faker.image.avatar() }
          author={ faker.name.firstName() }
          text={ faker.lorem.sentence() }
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          avatar= { faker.image.avatar() }
          author={ faker.name.firstName() }
          text={ faker.lorem.sentence() }
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <Comment
          avatar= { faker.image.avatar() }
          author={ faker.name.firstName() }
          text={ faker.lorem.sentence() }
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)