from django.urls import path
from .views import (
    ShapeDataListCreate,
    ShapeDataRetrieveUpdateDestroy,
    CustomLoginView  # ✅ Include your new login view
)

urlpatterns = [
    path('data/', ShapeDataListCreate.as_view(), name='shape-data-list-create'),
    path('data/<int:pk>/', ShapeDataRetrieveUpdateDestroy.as_view(), name='shape-data-detail'),
    path('login/', CustomLoginView.as_view(), name='custom-login'),  # ✅ Login endpoint
]
