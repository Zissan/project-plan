import React from "react";
import moment from "moment";
const Notifications = ({ notifications }) => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(n => (
                <li key={n.id}>
                  <span className="pink-text">{n.user} </span> |
                  <span> {n.content}</span>
                  <hr />
                  <div className="grey-text note-date">
                    {moment(n.time.toDate()).fromNow()}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
