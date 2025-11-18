//.fibery AUTOID=691b2d9562c62f2be72c99c6 ACTIONID=6c212790-300b-48d5-8e53-ca7e8bef0f5f

// Developer reference is at https://the.fibery.io/@public/User_Guide/Guide/Scripts-in-Automations-54

// Fibery API is used to retrieve and update entities
const fibery = context.getService('fibery');

// affected entities are stored in args.currentEntities;
// to support batch actions they always come in an array
for (const entity of args.currentEntities) {
    // an entity contains all fields apart from collections;
    // to access a field refer to it by its UI name
    const creationDate = entity['Creation Date'];

    // to get collection fields query the API and provide the list of fields
    const entityWithExtraFields = await fibery.getEntityById(entity.type, entity.id, ['Assignees', 'Files']);

    // to update an entity provide an object with the new values
    await fibery.updateEntity(entity.type, entity.id, {
        // 'Field Name': newValue
    });
}


// HTTP allows to send requests to external services
const http = context.getService('http');

/*
await http.postAsync('https://hooks.slack.com/services/YOUR_SLACK_URL', {
    body: {
        text: 'Successful success!'
    },
    headers: { 'Content-type': 'application/json' }
});
*/