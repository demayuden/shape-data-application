import json
from channels.generic.websocket import AsyncWebsocketConsumer

class ShapeDataConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_group_name = "shape_data_group"

        # Join the room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave the room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):
        data = json.loads(text_data)

        # Broadcast the message to the group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_shape_data',
                'message': data
            }
        )

    # Receive message from room group
    async def send_shape_data(self, event):
        message = event['message']

        # Send the message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))
