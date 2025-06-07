from rest_framework import generics
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from .models import ShapeData
from .serializers import ShapeDataSerializer

# Login View
class CustomLoginView(ObtainAuthToken):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({
            'token': token.key,
            'user_id': token.user_id,
            'username': token.user.username,
        })

# Shape Views
class ShapeDataListCreate(generics.ListCreateAPIView):
    queryset = ShapeData.objects.all()
    serializer_class = ShapeDataSerializer

    # Allow anyone to GET (read), but only logged-in users can POST (create)
    permission_classes = [AllowAny]

class ShapeDataRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = ShapeData.objects.all()
    serializer_class = ShapeDataSerializer

    # Same logic: GET for anyone, updates/deletes need auth
    permission_classes = [AllowAny]
