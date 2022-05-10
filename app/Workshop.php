<?php

namespace App;



/**
 * Class Workshop
 * @author karam mustafa
 * @package App
 */
class Workshop extends BaseModel
{

    protected $fillable = [
        'name', 'department_id', 'location','type','description','image',
        'name_ar',
        'description_ar',
        'branch_id',
        'is_booked',
        ];
    protected $appends = ['lat','lon' , 'employees_info'];

    /**
     * @return mixed
     * @author karam mustafa
     */
    protected function  getLatAttribute(){
        $lat = json_decode($this->attributes['location'] , true) ?? ['lat' => null];
        return $lat['lat'];
    }

    /**
     * @return mixed
     * @author karam mustafa
     */
    protected function  getLonAttribute(){
        $lon = json_decode($this->attributes['location'] , true) ?? ['lon' => null];
        return $lon['lon'];
    }

    /**
     * @return array
     * @author karam mustafa
     */
    protected function getEmployeesInfoAttribute()
    {
        $workElqouent = WorkIn::with('employee')
            ->where('workshop_id' , $this->id)->getWithOrderByDesc();
        $array = [];
        foreach ($workElqouent as $item) {
            array_push($array , $item->employee);
        }
        return $array;
    }

    /**
     * @return string
     * @author karam mustafa
     */
    public function getImageAttribute()
    {
        return asset('storage/files/images/work_shops/'.$this->attributes['image']);
    }

    /**
     * this function return parent toArray function from [Model Class]
     * and add employee and department info from Eloquent to response data
     * @return array
     */
    public function toArray()
    {
        $array = parent::toArray();
        $workElqouent = WorkIn::with('employee')->where('workshop_id' , $this->id)->getWithOrderByDesc();
        $array['employees_info'] = [];
        foreach ($workElqouent as $item) {
            array_push($array['employees_info'] , $item->employee);
        }
        unset($array['location']);
        $array['department_info'] = $this->department;
        $array['branch_info'] = $this->branch->only(['id' , 'name' , 'name_ar']);
        return $array;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function workIns(){
        return $this->hasMany(WorkIn::class,'workshop_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function department()
    {
        return $this->belongsTo(Department::class,'department_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    /**
     * @return string
     * @author karam mustafa
     */
    public function getTypeAttribute()
    {
        if ($this->attributes['type'] == 1) return 'Maintenance';
        if ($this->attributes['type'] == 2) return 'Installment';
        return "undefined";
    }
}
