Search.setIndex({"docnames": ["README", "notebooks/example-workflows/2mT", "notebooks/how-to-cite", "notebooks/notebook-template"], "filenames": ["README.md", "notebooks/example-workflows/2mT.ipynb", "notebooks/how-to-cite.md", "notebooks/notebook-template.ipynb"], "titles": ["HRRR on AWS Cookbook", "Plotting HRRR 2-meter temperatures", "How to Cite This Cookbook", "Project Pythia Notebook Template"], "terms": {"In": [0, 1, 3], "thi": [0, 1, 3], "project": [0, 1, 2], "pythia": [0, 2], "you": [0, 1, 2, 3], "access": [0, 3], "creat": [0, 1], "map": [0, 3], "from": [0, 1, 3], "archiv": [0, 2], "data": 0, "ncep": [0, 1], "": [0, 2], "high": [0, 1, 3], "resolut": [0, 1], "rapid": [0, 1], "refresh": [0, 1], "model": [0, 1], "which": [0, 1, 3], "i": [0, 2, 3], "serv": [0, 2], "an": [0, 3], "s3": [0, 1], "bucket": [0, 1], "provid": [0, 1, 3], "essenti": 0, "materi": [0, 2, 3], "learn": [0, 1, 3], "how": [0, 1, 3], "work": [0, 1, 3], "grid": 0, "output": [0, 3], "format": [0, 3], "call": [0, 1], "zarr": 0, "onc": [0, 1], "go": [0, 1], "through": 0, "have": [0, 1, 3], "master": 0, "follow": [0, 1, 3], "skill": 0, "understand": [0, 3], "what": 0, "object": [0, 1, 3], "store": [0, 1], "refer": 0, "relat": [0, 1], "familiar": [0, 3], "yourself": [0, 3], "represent": [0, 1], "why": 0, "optim": 0, "analyz": 0, "visual": [0, 3], "field": 0, "throughout": [0, 3], "we": [0, 1, 3], "build": [0, 3], "core": 0, "python": [0, 1, 3], "cover": 0, "book": [0, 2, 3], "kevin": 0, "tyle": 0, "two": [0, 1], "main": [0, 3], "section": 0, "current": [0, 1], "under": [0, 2], "develop": 0, "The": [0, 1, 2, 3], "content": [0, 1, 2], "includ": [0, 3], "overview": 0, "real": 0, "time": [0, 3], "nwp": 0, "introduct": 0, "read": [0, 3], "xarrai": [0, 1], "here": [0, 3], "appli": [0, 1], "lesson": [0, 1], "variou": 0, "analysi": 0, "everyth": 0, "plot": 0, "beauti": 0, "end": [0, 3], "addit": 0, "dataset": [0, 1], "specif": [0, 1, 3], "detail": [0, 1], "focus": 0, "upon": 0, "rather": 0, "than": [0, 1], "duplic": 0, "previou": 0, "2": [0, 2], "meter": 0, "temperatur": 0, "past": 0, "seri": [0, 1], "wind": 0, "speed": 0, "sequenc": 0, "forecast": 0, "most": [0, 3], "recent": 0, "can": [0, 1, 3], "either": [0, 3], "us": [0, 1, 3], "local": [0, 1], "simplest": 0, "wai": [0, 3], "interact": [0, 1], "jupyt": [0, 3], "enabl": [0, 3], "execut": 0, "cloud": [0, 1], "ar": [0, 1, 2], "import": 0, "now": [0, 1], "all": [0, 1, 2, 3], "need": [0, 1, 3], "know": [0, 3], "launch": [0, 1], "chapter": 0, "via": [0, 1, 3], "simpli": 0, "navig": 0, "mous": 0, "top": [0, 3], "right": [0, 1, 3], "corner": [0, 1], "view": 0, "click": 0, "rocket": 0, "ship": 0, "icon": 0, "see": [0, 1, 3], "figur": [0, 1], "below": [0, 1, 3], "sure": [0, 3], "select": 0, "after": [0, 3], "moment": 0, "should": [0, 3], "present": 0, "e": [0, 1], "ll": [0, 1, 3], "abl": 0, "even": [0, 1, 3], "chang": [0, 1], "program": 0, "code": [0, 2, 3], "cell": [0, 3], "first": [0, 1], "until": 0, "them": [0, 1, 3], "press": 0, "shift": 0, "enter": 0, "complet": 0, "live": 0, "describ": [0, 1, 3], "get": [0, 1, 3], "start": [0, 3], "If": [0, 1, 3], "interest": 0, "comput": [0, 1], "clone": 0, "repositori": 0, "git": 0, "http": [0, 3], "github": [0, 2], "com": [0, 3], "projectpythia": 0, "move": [0, 3], "directori": [0, 1], "cd": 0, "activ": 0, "conda": 0, "environ": 0, "yml": 0, "file": [0, 1], "env": 0, "f": [0, 1], "dev": 0, "up": [0, 1, 3], "jupyterlab": 0, "lab": [0, 3], "At": 0, "point": [0, 1, 3], "make": [0, 1, 3], "check": [0, 3], "out": [0, 3], "new": [0, 1, 3], "one": [1, 3], "variabl": 1, "concept": [1, 3], "note": [1, 3], "1": 1, "9": 1, "necessari": [1, 3], "30": 1, "minut": [1, 3], "xr": 1, "s3f": 1, "metpi": 1, "numpi": 1, "np": 1, "matplotlib": 1, "pyplot": 1, "plt": 1, "cartopi": [1, 3], "cr": 1, "ccr": 1, "featur": 1, "cfeatur": 1, "so": [1, 2, 3], "far": 1, "netcdf": [1, 3], "grib": 1, "rel": 1, "It": 1, "particularli": 1, "relev": [1, 3], "scenario": 1, "commonli": 1, "storag": 1, "method": 1, "amazon": 1, "googl": 1, "microsoft": 1, "typic": 1, "too": 1, "larg": 1, "load": 1, "memori": 1, "pangeo": 1, "recommend": 1, "amen": 1, "choic": 1, "our": [1, 3], "prefer": [1, 3], "multidimension": 1, "arrai": 1, "thank": [1, 3], "its": 1, "simpl": 1, "yet": 1, "well": [1, 3], "design": 1, "easili": 1, "distribut": 1, "divid": [1, 3], "chunk": 1, "compress": 1, "These": [1, 3], "individu": 1, "filesystem": 1, "metadata": [1, 3], "lightweight": 1, "json": 1, "both": 1, "base": 1, "exist": [1, 3], "convert": 1, "function": [1, 3], "For": [1, 3], "number": [1, 3], "year": 1, "mesowest": 1, "group": 1, "univers": 1, "utah": 1, "ha": 1, "origin": 1, "been": 1, "freeli": 1, "avail": 1, "web": 1, "servic": 1, "otherwis": [1, 3], "known": 1, "manner": 1, "akin": 1, "differ": 1, "linux": 1, "To": 1, "brows": 1, "link": [1, 3], "hrrrzarr": 1, "browser": 1, "3": 1, "step": 1, "process": [1, 3], "url": 1, "contain": 1, "want": 1, "librari": 1, "s3map": 1, "pass": 1, "open_dataset": 1, "open_mfdataset": 1, "specifi": 1, "engin": 1, "argument": 1, "A": 1, "quirk": 1, "were": [1, 3], "grib2": 1, "mean": [1, 2], "dimens": 1, "defin": 1, "where": [1, 3], "thu": 1, "strategi": 1, "correspond": 1, "date": 1, "20211016": 1, "hour": 1, "21": 1, "var": 1, "tmp": 1, "level": 1, "2m_above_ground": 1, "url1": 1, "sfc": 1, "_": 1, "z_anl": 1, "url2": 1, "print": [1, 3], "20211016_21z_anl": 1, "case": 1, "name": 1, "within": 1, "former": 1, "while": [1, 2], "latter": 1, "coordin": 1, "spatial": 1, "x": [1, 3], "y": [1, 3], "s3filesystem": 1, "anon": 1, "true": 1, "file1": 1, "file2": 1, "d": [1, 3], "examin": 1, "lt": 1, "gt": 1, "size": [1, 3], "4mb": 1, "projection_y_coordin": 1, "1059": 1, "projection_x_coordin": 1, "1799": 1, "float64": 1, "14kb": 1, "698e": 1, "0": [1, 2], "8kb": 1, "587e": 1, "06": 1, "float16": 1, "chunksiz": 1, "150": 1, "meta": 1, "ndarrai": 1, "forecast_period": 1, "timedelta64": 1, "n": 1, "8b": 1, "forecast_reference_tim": 1, "datetime64": 1, "height": 1, "pressur": 1, "datasetdimens": 1, "1059projection_x_coordin": 1, "1799coordin": 1, "695e": 1, "696e": 1, "06standard_nam": 1, "projection_x_coordinateunit": 1, "marrai": 1, "2697520": 1, "142522": 1, "2694520": 1, "2691520": 1, "2690479": 1, "857478": 1, "2693479": 1, "2696479": 1, "584e": 1, "projection_y_coordinateunit": 1, "1587306": 1, "152557": 1, "1584306": 1, "1581306": 1, "1580693": 1, "847443": 1, "1583693": 1, "1586693": 1, "6": 1, "float16dask": 1, "grib_param": 1, "long_nam": 1, "tmpunit": 1, "k": 1, "byte": 1, "63": 1, "mib": 1, "43": 1, "95": 1, "kib": 1, "shape": 1, "graph": 1, "96": 1, "layer": 1, "type": 1, "standard_nam": 1, "valu": 1, "dtype": 1, "heightunit": 1, "m": [1, 3], "pressureunit": 1, "pa": 1, "index": 1, "projection_x_coordinatepandasindexpandasindex": 1, "1425219304": 1, "2688520": 1, "2685520": 1, "2682520": 1, "2679520": 1, "2676520": 1, "2673520": 1, "2670520": 1, "2669479": 1, "8574780696": 1, "2672479": 1, "2675479": 1, "2678479": 1, "2681479": 1, "2684479": 1, "2687479": 1, "x27": 1, "length": 1, "projection_y_coordinatepandasindexpandasindex": 1, "1525566636": 1, "1578306": 1, "1575306": 1, "1572306": 1, "1569306": 1, "1566306": 1, "1563306": 1, "1560306": 1, "1559693": 1, "8474433364": 1, "1562693": 1, "1565693": 1, "1568693": 1, "1571693": 1, "1574693": 1, "1577693": 1, "attribut": [1, 3], "inform": [1, 3], "wa": [1, 3], "readili": 1, "found": 1, "paramet": 1, "explicitli": [1, 3], "other": [1, 3], "sourc": [1, 2], "shown": 1, "lcc": 1, "angl": 1, "38": 1, "5": [1, 3], "97": 1, "1381": 1, "122": 1, "7195": 1, "ur": 1, "47": 1, "8422": 1, "60": 1, "9168": 1, "lon1": 1, "lat1": 1, "slat": 1, "projdata": 1, "lambertconform": 1, "central_longitud": 1, "central_latitud": 1, "standard_parallel": 1, "globe": 1, "semimajor_axi": 1, "6371229": 1, "semiminor_axi": 1, "assum": 1, "spheric": 1, "earth": 1, "whose": 1, "semi": 1, "major": 1, "minor": 1, "ax": 1, "equal": 1, "6371": 1, "229": 1, "km": 1, "therefor": 1, "each": [1, 3], "repres": 1, "distanc": 1, "central": 1, "latitud": 1, "longitud": 1, "coord": 1, "airtemp": 1, "when": 1, "special": 1, "dataarrai": 1, "daskarrai": 1, "chunktyp": 1, "unit": 1, "kxarrai": 1, "1799dask": 1, "especi": 1, "suit": 1, "handl": 1, "veri": 1, "those": 1, "fit": 1, "ram": 1, "nice": 1, "integr": 1, "re": [1, 3], "defer": 1, "explor": 1, "But": 1, "suffic": 1, "sai": 1, "result": 1, "support": 1, "perform": 1, "convers": 1, "straightforward": 1, "convert_unit": 1, "degc": 1, "verifi": 1, "quantiti": 1, "truediv": 1, "degree_celsiu": 1, "tmpxarrai": 1, "ch": 1, "magnitud": 1, "unitsdegree_celsiuscoordin": 1, "similar": 1, "did": 1, "just": [1, 3], "quick": 1, "look": [1, 3], "thing": 1, "figsiz": 1, "11": 1, "8": 1, "collect": 1, "quadmesh": 1, "0x7f10a8381bb0": 1, "facilit": 1, "bound": 1, "contour": 1, "interv": 1, "obtain": 1, "min": [1, 3], "max": 1, "more": [1, 3], "lazi": 1, "term": 1, "basic": 1, "g": 1, "calcul": 1, "don": [1, 3], "t": [1, 3], "straightawai": 1, "anoth": 1, "2b": 1, "4": [1, 2], "75": 1, "75arrai": 1, "With": 1, "doesn": 1, "actual": 1, "do": [1, 3], "instead": [1, 3], "task": 1, "would": 1, "trigger": 1, "mintemp": 1, "maxtemp": 1, "rang": 1, "let": [1, 3], "invok": 1, "floor": 1, "ceil": 1, "ing": 1, "conform": 1, "whatev": 1, "fint": 1, "arang": 1, "7": 1, "13": 1, "15": 1, "17": 1, "19": 1, "23": 1, "25": 1, "27": 1, "29": 1, "31": 1, "33": 1, "35": 1, "37": 1, "39": 1, "singl": [1, 3], "set": 1, "fill": [1, 3], "abov": [1, 3], "appropri": [1, 2, 3], "produc": 1, "consist": 1, "wider": 1, "better": 1, "extent": 1, "encompass": 1, "domain": 1, "latn": 1, "50": 1, "lat": 1, "24": 1, "lonw": 1, "123": 1, "lone": 1, "71": 1, "50m": 1, "fig": 1, "18": 1, "12": 1, "subplot": 1, "set_ext": 1, "platecarre": 1, "add_featur": 1, "coastlin": 1, "with_scal": 1, "state": [1, 3], "add": [1, 3], "titl": [1, 3], "tl1": 1, "str": 1, "circ": 1, "c": 1, "tl2": 1, "valid": 1, "00": 1, "utc": 1, "fontsiz": 1, "16": 1, "cf": 1, "contourf": 1, "cmap": 1, "get_cmap": 1, "coolwarm": 1, "colorbar": 1, "contourset": 1, "return": 1, "cbar": 1, "shrink": [1, 3], "set_label": 1, "r": 1, "ideal": 1, "system": [1, 3], "On": 1, "your": 1, "own": 1, "try": [1, 3], "implement": 1, "hrrr": 2, "aw": 2, "licens": 2, "free": [2, 3], "open": 2, "consumpt": 2, "reus": 2, "apach": 2, "non": [2, 3], "creativ": 2, "common": 2, "BY": 2, "cc": 2, "effect": 2, "share": 2, "adapt": 2, "long": 2, "give": [2, 3], "credit": [2, 3], "author": [2, 3], "commun": 2, "releas": 2, "zenodo": 2, "doi": 2, "alwai": 2, "resolv": 2, "latest": 2, "directli": 3, "imag": 3, "canon": 3, "logo": 3, "markdown": 3, "syntax": 3, "png": 3, "alt": 3, "text": 3, "edit": 3, "raw": 3, "html": 3, "img": 3, "embed": 3, "ani": 3, "anywher": 3, "els": 3, "navbar": 3, "tabl": 3, "etc": 3, "keep": 3, "short": 3, "descript": 3, "distinguish": 3, "transit": 3, "introductori": 3, "paragraph": 3, "lead": 3, "ti": 3, "continu": 3, "requir": 3, "list": 3, "topic": 3, "approxim": 3, "Or": 3, "scope": 3, "And": 3, "reader": 3, "front": 3, "thei": 3, "leav": 3, "inspir": 3, "wonder": 3, "ture": 3, "tell": 3, "packag": 3, "background": 3, "befor": 3, "tie": 3, "page": 3, "foundat": 3, "extern": 3, "remov": 3, "bodi": 3, "popul": 3, "denot": 3, "vertic": 3, "bracket": 3, "lai": 3, "gener": 3, "help": 3, "label": 3, "intro": 3, "structur": 3, "manag": 3, "estim": 3, "rough": 3, "idea": 3, "per": 3, "10": 3, "longer": 3, "total": 3, "safer": 3, "round": 3, "overestim": 3, "version": 3, "softwar": 3, "extra": 3, "altogeth": 3, "begin": 3, "sy": 3, "loos": 3, "togeth": 3, "narr": 3, "interspers": 3, "hello": 3, "world": 3, "conquer": 3, "some": 3, "good": 3, "avoid": 3, "comment": 3, "onli": 3, "brief": 3, "clarif": 3, "h": 3, "similarli": 3, "latex": 3, "equat": 3, "mathjax": 3, "demo": 3, "align": 3, "dot": 3, "sigma": 3, "rho": 3, "xz": 3, "z": 3, "beta": 3, "xy": 3, "custom": 3, "doc": 3, "hesit": 3, "ask": 3, "question": 3, "problem": 3, "comfort": 3, "briefli": 3, "emb": 3, "feel": 3, "copi": 3, "around": 3, "plai": 3, "admonit": 3, "put": 3, "got": 3, "done": 3, "Be": 3, "care": 3, "scari": 3, "stuff": 3, "also": 3, "suggest": 3, "ad": 3, "tag": 3, "manual": 3, "allow": 3, "displai": 3, "error": 3, "without": 3, "crash": 3, "loyal": 3, "armi": 3, "machin": 3, "final": 3, "mark": 3, "conclud": 3, "summar": 3, "kei": 3, "piec": 3, "reiter": 3, "takeawai": 3, "sequenti": 3, "peopl": 3, "could": 3, "down": 3, "sidebar": 3, "howev": 3, "uniqu": 3, "tackl": 3, "nonsequenti": 3, "rigor": 3, "citat": 3, "due": 3, "document": 3, "Then": 3, "review": 3, "five": 3, "send": 3, "u": 3, "pull": 3, "request": 3, "few": 3, "kernel": 3, "restart": 3, "run": 3, "confirm": 3, "cleanli": 3, "finish": 3, "clear": 3, "commit": 3, "heavi": 3, "lift": 3, "take": 3, "contact": 3, "like": 3, "consid": 3, "bottom": 3, "authorship": 3, "referenc": 3, "legal": 3, "copyright": 3, "infring": 3, "plagiar": 3, "contribut": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"hrrr": [0, 1], "aw": [0, 1], "cookbook": [0, 2], "motiv": 0, "author": 0, "contributor": 0, "structur": 0, "foundat": 0, "exampl": 0, "workflow": 0, "run": 0, "notebook": [0, 3], "binder": 0, "your": [0, 3], "own": 0, "machin": 0, "plot": 1, "2": 1, "meter": 1, "temperatur": 1, "overview": [1, 3], "prerequisit": [1, 3], "import": [1, 3], "what": [1, 3], "i": 1, "zarr": 1, "access": 1, "archiv": 1, "data": 1, "host": 1, "format": 1, "span": 1, "grid": 1, "navig": 1, "sidetrip": 1, "dask": 1, "visual": 1, "2m": 1, "an": 1, "analysi": 1, "time": 1, "map": 1, "summari": [1, 3], "": [1, 3], "next": [1, 3], "resourc": [1, 3], "refer": [1, 3], "how": 2, "cite": 2, "thi": 2, "project": 3, "pythia": 3, "templat": 3, "first": 3, "content": 3, "section": 3, "A": 3, "subsect": 3, "anoth": 3, "second": 3, "quick": 3, "demonstr": 3, "further": 3, "header": 3, "level": 3, "last": 3, "info": 3, "success": 3, "warn": 3, "danger": 3}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"HRRR on AWS Cookbook": [[0, "hrrr-on-aws-cookbook"]], "Motivation": [[0, "motivation"]], "Authors": [[0, "authors"]], "Contributors": [[0, "contributors"]], "Structure": [[0, "structure"]], "Foundations": [[0, "foundations"]], "Example Workflows": [[0, "example-workflows"]], "Running the Notebooks": [[0, "running-the-notebooks"]], "Running on Binder": [[0, "running-on-binder"]], "Running on Your Own Machine": [[0, "running-on-your-own-machine"]], "Plotting HRRR 2-meter temperatures": [[1, "plotting-hrrr-2-meter-temperatures"]], "Overview": [[1, "overview"], [3, "overview"]], "Prerequisites": [[1, "prerequisites"], [3, "prerequisites"]], "Imports": [[1, "imports"], [3, "imports"]], "What is Zarr?": [[1, "what-is-zarr"]], "Access archived HRRR data hosted on AWS in Zarr format</span>": [[1, "access-archived-hrrr-data-hosted-on-aws-in-zarr-format"]], "HRRR Grid Navigation:": [[1, "hrrr-grid-navigation"]], "Sidetrip: Dask": [[1, "sidetrip-dask"]], "Visualize 2m temperature at an analysis time": [[1, "visualize-2m-temperature-at-an-analysis-time"]], "Plot the map": [[1, "plot-the-map"]], "Summary": [[1, "summary"], [3, "summary"]], "What\u2019s next?": [[1, "whats-next"], [3, "whats-next"]], "Resources and References": [[1, "resources-and-references"]], "How to Cite This Cookbook": [[2, "how-to-cite-this-cookbook"]], "Project Pythia Notebook Template": [[3, "project-pythia-notebook-template"]], "Your first content section": [[3, "your-first-content-section"]], "A content subsection": [[3, "a-content-subsection"]], "Another content subsection": [[3, "another-content-subsection"]], "Your second content section": [[3, "your-second-content-section"]], "Subsection to the second section": [[3, "subsection-to-the-second-section"]], "a quick demonstration": [[3, "a-quick-demonstration"]], "of further and further": [[3, "of-further-and-further"]], "header levels": [[3, "header-levels"]], "Last Section": [[3, "last-section"]], "Info": [[3, null]], "Success": [[3, null]], "Warning": [[3, null]], "Danger": [[3, null]], "Resources and references": [[3, "resources-and-references"]]}, "indexentries": {}})