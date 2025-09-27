from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):
    print(f"User accessing dashboard: {request.user}")
    return render(request, 'dashboard.html')

@login_required
def electricity(request):
    return render(request, 'electricity.html')

@login_required
def reports(request):
    return render(request, 'reports.html')

@login_required
def settings(request):
    return render(request, 'settings.html')

@login_required
def water(request):
    return render(request, 'water.html')

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})
