import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import Sidebar from "../../Components/Sidebar";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventList, setEventList] = useState([]);
  const [roleName, setRoleName] = useState("");
  const [rolePoints, setRolePoints] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const events = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEventList(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleCreateEvent = async () => {
    if (!eventName.trim()) return alert("Event name cannot be empty!");

    try {
      const docRef = await addDoc(collection(db, "events"), {
        eventName,
        roles: [],
      });

      setEventList([...eventList, { id: docRef.id, eventName, roles: [] }]);
      setEventName("");
      alert(`Event "${eventName}" created successfully!`);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleAddRole = async () => {
    if (!selectedEvent || !roleName.trim() || !rolePoints.trim()) {
      return alert("Please fill all fields!");
    }

    try {
      const eventRef = doc(db, "events", selectedEvent);
      const event = eventList.find((e) => e.id === selectedEvent);
      const updatedRoles = [...(event.roles || []), { name: roleName, points: parseInt(rolePoints) }];

      await updateDoc(eventRef, { roles: updatedRoles });

      setEventList(eventList.map((e) => (e.id === selectedEvent ? { ...e, roles: updatedRoles } : e)));
      setRoleName("");
      setRolePoints("");
      alert("Role added successfully!");
    } catch (error) {
      console.error("Error adding role:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create New Event</h2>

      <Form>
        <Form.Group>
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event name"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCreateEvent} className="mt-2">
          Create Event
        </Button>
      </Form>

      <hr />

      <h4>List of Events</h4>
      {eventList.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Event Name</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {eventList.map((event, index) => (
              <tr key={event.id}>
                <td>{index + 1}</td>
                <td>{event.eventName}</td>
                <td>
                  {event.roles && event.roles.length > 0 ? (
                    event.roles.map((role, idx) => (
                      <div key={idx}>
                        <strong>{role.name}</strong> - {role.points} points
                      </div>
                    ))
                  ) : (
                    <span>No roles assigned</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <hr />

      <h4>Add Role to Event</h4>
      <Form>
        <Form.Group>
          <Form.Label>Select Event</Form.Label>
          <Form.Control as="select" value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
            <option value="">-- Select Event --</option>
            {eventList.map((event) => (
              <option key={event.id} value={event.id}>
                {event.eventName}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Role Name</Form.Label>
          <Form.Control
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            placeholder="Enter role name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Role Points</Form.Label>
          <Form.Control
            type="number"
            value={rolePoints}
            onChange={(e) => setRolePoints(e.target.value)}
            placeholder="Enter points"
          />
        </Form.Group>

        <Button variant="success" onClick={handleAddRole} className="mt-2">
          Add Role
        </Button>
      </Form>
    </div>
  );
};

export default CreateEvent;
