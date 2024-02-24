import React, { useEffect, useState } from 'react';

const Problem2 = () => {
    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);
    const [showModalC, setShowModalC] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [onlyEven, setOnlyEven] = useState(true);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [onlyUS, setOnlyUS] = useState([]);

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/?page=1&page_size=8')
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                const contacts = data.results;
                const filteredContacts = onlyEven ? contacts.filter(contact => contact.id % 2 === 0) : contacts;
                console.log(filteredContacts);
                const onlyUS = filteredContacts.filter(contact => contact.country.name === 'United States');
                setFilteredContacts(filteredContacts);
                setOnlyUS(onlyUS);
            })
            .catch(error => console.error('Error fetching contacts:', error));
    }, [onlyEven]);

    const handleContactsClick = (modal) => {
        if (modal === 'A') {
            setShowModalA(true);
            setShowModalB(false); 
            setSelectedContact(null);
            setOnlyEven(false);
        } else if (modal === 'B') {
            setShowModalB(true);
            setShowModalA(false); 
            setSelectedContact(null); 
            setOnlyEven(false); 
        }
    };

    const closeModal = (modal) => {
        if (modal === 'A') {
            setShowModalA(false);
        } else if (modal === 'B') {
            setShowModalB(false);
        } else if (modal === 'C') {
            setShowModalC(false);
        }
    };

    const openModalC = (contact) => {
        setSelectedContact(contact);
        setShowModalC(true);
    };

    const handleCheckboxChange = () => {
        setOnlyEven(!onlyEven);
    };

    return (
        <div className="container" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="row justify-content-center">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => handleContactsClick('A')}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => handleContactsClick('B')}>US Contacts</button>
                </div>
            </div>
            {showModalA && (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">All Contacts</h5>
                    <button type="button" className="close" onClick={() => closeModal('A')} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <ul className="list-group mt-3">
                        {filteredContacts.map(contact => (
                            <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center" onClick={() => openModalC(contact)}>
                                {contact.name} - {contact.country.name} 
                                <span className="badge bg-primary rounded-pill">ID: {contact.id}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="modal-footer">
                    <div>
                        <button type="button" className="btn btn-lg" style={{ backgroundColor: '#46139f', borderColor: '#46139f' }} onClick={() => handleContactsClick('A')}>All Contacts</button>
                        <button type="button" className="btn btn-lg" style={{ backgroundColor: '#ff7f50' }} onClick={() => handleContactsClick('B')}>US Contacts</button>
                        <button type="button" className="btn btn-lg btn-danger" style={{ backgroundColor: 'white', borderColor: '#46139f', color: '#46139f' }} onClick={() => closeModal('A')}>Close</button>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkboxA" checked={onlyEven} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="checkboxA">
                            Only even
                        </label>
                    </div>

                </div>
            </div>
        </div>
    </div>
)}
{showModalB && (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">US Contacts</h5>
                    <button type="button" className="close" onClick={() => closeModal('B')} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
         
                    <ul className="list-group mt-3">
                        {onlyUS.map(contact => (
                            <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center" onClick={() => openModalC(contact)}>
                                {contact.name} - {contact.country.name}
                                <span className="badge bg-primary rounded-pill">ID: {contact.id}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="modal-footer">
                    <div>
                        <button type="button" className="btn btn-lg" style={{ backgroundColor: '#46139f' }} onClick={() => handleContactsClick('A')}>All Contacts</button>
                        <button type="button" className="btn btn-lg" style={{ backgroundColor: '#ff7f50' }} onClick={() => handleContactsClick('B')}>US Contacts</button>
                        <button type="button" className="btn btn-lg btn-danger" style={{ backgroundColor: 'white', borderColor: '#46139f', color: '#46139f' }} onClick={() => closeModal('B')}>Close</button>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkboxB" checked={onlyEven} onChange={handleCheckboxChange} /> 
                        <label className="form-check-label" htmlFor="checkboxB"> 
                            Only even
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}
{showModalC && selectedContact && (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Contact Details</h5>
                    <button type="button" className="close" onClick={() => closeModal('C')} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p><strong>ID:</strong> {selectedContact.id}</p>
                    <p><strong>Country:</strong> {selectedContact.country.name}</p> 
                    <p><strong>Phone:</strong> {selectedContact.phone}</p>
                 
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => closeModal('C')}>Close</button>
                </div>
            </div>
        </div>
    </div>
)}
        </div>
    );
};

export default Problem2;
