<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CarResource;
use Illuminate\Http\Request;
use App\Models\Car;
use App\Http\Requests\StoreCarRequest;

class CarController extends Controller
{
    public function index()
    {
        return Car::all();
    }
    public function store(StoreCarRequest $request)
    {
        $data = $request->validated();
        $car = Car::create($data);
        return response([new CarResource($car), 201]); // paranteze patrate array
    }

    public function show(Car $car) {
        return new CarResource($car);
    }

}
