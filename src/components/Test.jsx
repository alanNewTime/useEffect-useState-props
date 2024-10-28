function Test(props) {
  const listItems = props.object;

  const mappedItems = listItems.map((item) => {
    //USERS SECTION START
    if (props.category === "users") {
      if (props.isAvailable) {
        return (
          <li className="box" key={item.id}>
            <span>
              <strong>Name:</strong> {item.name}
            </span>
            <span>
              <strong>UserName:</strong> {item.username}
            </span>
            <span>
              <strong>Email:</strong> {item.email}
            </span>
            <span>
              <strong>Phone:</strong> {item.phone}
            </span>
          </li>
        );
      } else {
        return (
          <li className="box" key={item.id}>
            <p>NOT AVAILABLE</p>
          </li>
        );
      }
    }
    //POSTS SECTION START
    else if (props.category === "posts") {
      if (props.isAvailable) {
        return (
          <li className="box" key={item.id}>
            <span>
              <strong>Title:</strong> {item.title}
            </span>
            <span>
              <strong>Body:</strong> {item.body}
            </span>
          </li>
        );
      } else {
        return (
          <li className="box" key={item.id}>
            <p>NOT AVAILABLE</p>
          </li>
        );
      }
    }
    //COMMENTS SECTION START
    else if (props.category === "comments") {
      if (props.isAvailable) {
        return (
          <li className="box" key={item.id}>
            <span>
              <strong>Name:</strong> {item.name}
            </span>
            <span>
              <strong>Email:</strong> {item.email}
            </span>
            <span>
              <strong>Body:</strong> {item.body}
            </span>
          </li>
        );
      } else {
        return (
          <li className="box" key={item.id}>
            <p>NOT AVAILABLE</p>
          </li>
        );
      }
    }
  });

  return (
    <>
      <div>
        <ol>{mappedItems}</ol>
      </div>
    </>
  );
}

export default Test;
